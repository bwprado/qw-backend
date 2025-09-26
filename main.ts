import type { ParsedMatch } from './types.ts'

import { createHash } from 'node:crypto'
import { ChromaClient } from 'npm:chromadb'
import { replaceUnicodeStrings } from './utils/parsers.ts'

const URLS = ['http://ring.quakeworld.com.br:28000']
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

    // Ensure directory exists
    const dir = filename.substring(0, filename.lastIndexOf('/'))
    if (dir) {
      await Deno.mkdir(dir, { recursive: true })
    }

    console.log(`Saving ${filename}...`)
    const file = Deno.writeFileSync(filename, demo)
    return { data: file, error: null }
  } catch (error) {
    console.error('Failed to save demo', error)
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

  // Ensure stats directory exists
  await Deno.mkdir('./stats', { recursive: true })
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

async function addStatsToDatabase(parsed: ParsedMatch) {
  try {
    const url = 'https://spotted-wildcat-714.convex.cloud'
    const hash = createHash('sha256').update(JSON.stringify(parsed)).digest('hex')

    const hasBot = parsed.players.some((player) => player.bot)

    if (hasBot) {
      console.log('Bot detected, skipping...')
      return false
    }

    if (parsed?.duration === 0 || parsed?.duration < 180) {
      console.log('Match aborted, skipping...')
      return false
    }

    // Check if match already exists
    try {
      const doesMatchExist = await fetch(`${url}/matches?hash=${hash}`)
      if (doesMatchExist.status === 200) {
        console.log('Match already exists, skipping...')
        return false
      }
    } catch (error: unknown) {
      // If record doesn't exist, that's fine - we can proceed
      if (error && typeof error === 'object' && 'status' in error && error.status !== 404) {
        throw error
      }
    }

    const { players } = parsed
    const nicknames = players.map((player) => player.name)

    // Get existing nicknames
    const _nicknamesList = await fetch(`${url}/nicknames?nickname=${nicknames.join('|')}`)

    // Create the match record
    await fetch(`${url}/matches`, {
      method: 'POST',
      body: JSON.stringify({
        id: hash,
        demo: parsed.demo,
        duration: parsed.duration,
        players: parsed.players,
        map: parsed.map,
        date: parsed.date
      })
    })

    console.log(`Successfully added match: ${parsed.demo}`)
    return true
  } catch (error: unknown) {
    console.error('PocketBase error:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    await saveErrorLog(`PocketBase error: ${errorMessage}`, 'addStatsToPocketBase')
    return false
  }
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
      console.log(filename)

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

      console.log(parsed)
      Deno.writeFileSync(
        `./stats/${parsed.demo}.json`,
        new TextEncoder().encode(JSON.stringify(parsed, null, 2))
      )
    }
  }

  await client.reset()

  console.timeEnd('demos')
  console.info('Done fetching demos...')
}

if (import.meta.main) {
  main()
}
