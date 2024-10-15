import { parseName } from './utils/parsers.ts'

export function test(name: string) {
  const parsed = parseName(name)
  console.log(name)
  console.log(parsed)
}

if (import.meta.main) {
  test('\\u0076\\u0069\\u0070\\u0065\\u0072\\u009c\\u00e7\\u00e4\\u00f1')
}
