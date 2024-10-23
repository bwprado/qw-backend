import PocketBase from 'npm:pocketbase'

import type { ParsedMatch } from './types.ts'

import { ChromaClient } from 'npm:chromadb'
import { replaceUnicodeStrings } from './utils/parsers.ts'
import { createHash } from 'node:crypto'

const URLS = ['http://quad.quakeworld.com.br:28000']
const ENDPOINT = {
  DEMOS_LIST: '/demo_filenames.txt',
  DEMO: '/dl/demos/'
}

const client = new ChromaClient()

async function saveErrorLog(error: string, origin: string) {
  try {
    const timestamp = new Date().toISOString()
    const logEntry = `${timestamp}: ${error} - ${origin}\n`
    console.error(logEntry)
    await Deno.writeTextFile('./error.log', logEntry, { append: true })
  } catch (error) {
    console.error('Error saving error log:', error)
  }
}

async function getDemoFilenames(url: string) {
  const response = await fetch(url + ENDPOINT.DEMOS_LIST)

  if (!response.ok) {
    await saveErrorLog('Failed to fetch demos list', url)
    return { error: 'Failed to fetch demos list' }
  }

  const data = await response.text()

  if (!data) {
    await saveErrorLog('No demos list found', url)
    return { error: 'No demos list found' }
  }

  if (!data.trim().length) {
    await saveErrorLog('Demos list is empty', url)
    return { error: 'Demos list is empty' }
  }

  return { data: data.trim().split('\n').slice(0, 10), error: null }
}

async function getDemoFile(url: string, filename: string) {
  try {
    console.log(`Downloading ${filename}...`)
    const response = await fetch(url + ENDPOINT.DEMO + filename)

    if (!response.ok) {
      await saveErrorLog('Failed to fetch demo', url)
      return { data: null, error: 'Failed to fetch demo' }
    }

    const data = await response.arrayBuffer()

    return { data: new Uint8Array(data), error: null }
  } catch (_) {
    await saveErrorLog('Failed to fetch demo', url)
    return { data: null, error: 'Failed to fetch demo' }
  }
}

async function saveDemo(filename: string, demo: Uint8Array) {
  try {
    if (!filename) return { data: null, error: 'No filename provided' }

    console.log(`Saving ${filename}...`)
    const file = Deno.writeFileSync(filename, demo)
    return { data: file, error: null }
  } catch (_) {
    await saveErrorLog('Failed to save demo', filename)
    return { data: null, error: 'Failed to save demo' }
  }
}

async function executeMvdParser(filename: string) {
  if (!filename) return { data: null, error: 'No filename provided' }

  await new Deno.Command('./mvdparser.exe', {
    args: [filename]
  }).output()

  if (
    await Deno.stat(filename)
      .then(() => true)
      .catch(() => false)
  ) {
    await Deno.remove(filename)
  }
}

async function parseKTXStats(filename: string) {
  if (!filename) return { data: null, error: 'No filename provided' }

  const file = await Deno.readTextFile(filename + '.ktxstats.json')
  const data = JSON.parse(file)
  const parsed = replaceUnicodeStrings(data)
  await Deno.writeTextFile(`./stats/${parsed.demo}.json`, JSON.stringify(parsed, null, 2))
  await Deno.remove(filename + '.ktxstats.json')

  return { data: parsed, error: null }
}

async function addToChromaDB(parsed: ParsedMatch) {
  try {
    const collection = await client.getOrCreateCollection({
      name: 'nicknames'
    })
    collection.add({
      ids: parsed.players.map((player) => player.name),
      documents: parsed.players.map((player) => player.name)
    })

    if (
      await Deno.stat(`./demos/${parsed.demo}.json`)
        .then(() => true)
        .catch(() => false)
    ) {
      await Deno.remove(`./demos/${parsed.demo}.json`)
    }
  } catch (error) {
    console.error('ChromaDB error:', error)
  }
}

async function queryChromaDB(query: string) {
  try {
    const collection = await client.getOrCreateCollection({
      name: 'nicknames'
    })
    const results = await collection.query({
      queryTexts: [query],
      nResults: 10
    })
    return { data: results, error: null }
  } catch (error) {
    console.error('ChromaDB error:', error)
    return { error: 'ChromaDB error' }
  }
}

async function addStatsToPocketBase(parsed: ParsedMatch) {
  const pb = new PocketBase(Deno.env.get('POCKETBASE_URL'))

  const hash = createHash('sha256').update(JSON.stringify(parsed)).digest('hex')

  const hasBot = parsed.players.some((player) => player.bot)

  if (hasBot) {
    console.log('Bot detected, skipping...')
    return false
  }

  if (parsed?.aborted) {
    console.log('Match aborted, skipping...')
    return false
  }

  const doesMatchExist = await pb.collection('matches').getOne(hash)

  if (doesMatchExist) {
    console.log('Match already exists, skipping...')
    return false
  }

  const { players } = parsed

  const nicknames = players.map((player) => player.name)

  const nicknamesList = await pb.collection('nicknames').getFullList({
    filter: `nickname ~ "${nicknames.join('|')}"`
  })
}

export async function main() {
  console.time('demos')

  for (const url of URLS) {
    const { data: demosList, error } = await getDemoFilenames(url)

    if (error || !demosList) {
      console.error(error)
      continue
    }

    for (const [index, demoFilename] of demosList.entries()) {
      const { data: demo, error } = await getDemoFile(url, demoFilename)

      if (error || !demo) {
        await saveErrorLog(error, url)
        continue
      }
      const filename = `./demos/stats_${index}`

      const { error: saveError } = await saveDemo(filename + '.mvd', demo)

      if (saveError) {
        await saveErrorLog(saveError, url)
        continue
      }

      await executeMvdParser(filename + '.mvd')
      const { data: parsed, error: parseError } = await parseKTXStats(filename)

      if (parseError || !parsed) {
        await saveErrorLog(parseError, url)
        continue
      }

      const addedStatsToPocketBase = await addStatsToPocketBase(parsed)

      if (!addedStatsToPocketBase) {
        await saveErrorLog('Failed to add stats to PocketBase', url)
        continue
      }

      await addToChromaDB(parsed)
    }
  }

  await client.reset()

  const { data: queryResults, error } = await queryChromaDB('cova')

  if (error) {
    console.error(error)
    return
  }

  console.log(queryResults)

  console.timeEnd('demos')
  console.info('Done fetching demos...')
}

if (import.meta.main) {
  main()
}
