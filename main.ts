const URLS = ['http://quad.quakeworld.com.br:28000']
const ENDPOINT = {
  DEMOS_LIST: '/demo_filenames.txt',
  DEMO: '/dl/demos/'
}

export async function fetchDemos() {
  console.time('Fetching demos...')
  for (const url of URLS) {
    const response = await fetch(url + ENDPOINT.DEMOS_LIST)
    const data = await response.text()
    const demosList = data.trim().split('\n').slice(0, 10)

    for (const [index, demoFilename] of demosList.entries()) {
      const demo = await fetch(url + ENDPOINT.DEMO + demoFilename)
      console.log(`Downloading ${demoFilename}...`)
      Deno.writeFileSync(`./demos/demo${index}.mvd`, new Uint8Array(await demo.arrayBuffer()))

      await new Deno.Command('./mvdparser.exe', {
        args: ['./demos/demo' + index + '.mvd']
      }).output()

      Deno.removeSync(`./demos/demo${index}.mvd`)

      const file = await Deno.readTextFile(`./demos/demo${index}.ktxstats.json`)
      const data = JSON.parse(file)
    }
  }
  console.timeEnd('Done fetching demos...')
}

if (import.meta.main) {
  fetchDemos()
}
