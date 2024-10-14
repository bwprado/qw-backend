import { ChromaClient } from 'npm:chromadb'
import _ from 'npm:lodash'
import { replaceParsedStrings } from './utils/parsers.ts'
import type { ParsedMatch } from './types.ts'

const URLS = ['http://quad.quakeworld.com.br:28000']
const ENDPOINT = {
  DEMOS_LIST: '/demo_filenames.txt',
  DEMO: '/dl/demos/'
}

const client = new ChromaClient()

async function getDemoFilenames(url: string) {
  const response = await fetch(url + ENDPOINT.DEMOS_LIST)

  if (!response.ok) {
    console.error('Failed to fetch demos list')
    return { error: 'Failed to fetch demos list' }
  }

  const data = await response.text()

  if (!data) {
    console.error('No demos list found')
    return { error: 'No demos list found' }
  }

  if (!data.trim().length) {
    console.error('Demos list is empty')
    return { error: 'Demos list is empty' }
  }

  return { data: data.trim().split('\n').slice(0, 10), error: null }
}

async function getDemoFile(url: string, filename: string) {
  try {
    console.log(`Downloading ${filename}...`)
    const response = await fetch(url + ENDPOINT.DEMO + filename)

    if (!response.ok) {
      console.error('Failed to fetch demo')
      return { data: null, error: 'Failed to fetch demo' }
    }

    const data = await response.arrayBuffer()

    return { data: new Uint8Array(data), error: null }
  } catch (error) {
    console.error(error)
    return { data: null, error: 'Failed to fetch demo' }
  }
}

function saveDemo(filename: string, demo: Uint8Array) {
  try {
    if (!filename) return { data: null, error: 'No filename provided' }

    console.log(`Saving ${filename}...`)
    const file = Deno.writeFileSync(filename, demo)
    return { data: file, error: null }
  } catch (error) {
    console.error(error)
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
  const parsed = replaceParsedStrings(data)
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
        console.error(error)
        continue
      }
      const filename = `./demos/stats_${index}`

      const { error: saveError } = saveDemo(filename + '.mvd', demo)

      if (saveError) {
        console.error(saveError)
        continue
      }

      await executeMvdParser(filename + '.mvd')
      const { data: parsed, error: parseError } = await parseKTXStats(filename)

      if (parseError || !parsed) {
        console.error(parseError)
        continue
      }

      await addToChromaDB(parsed)
    }
  }

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
