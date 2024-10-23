import type { Player, Match } from '../types.ts'

export const createScore = (players: Player[]) => {
  if (players.length === 2 && players[0]?.team === players[1]?.team) {
    return {
      score: [
        { team: 'red', score: players[0].stats.frags },
        { team: 'blue', score: players[1].stats.frags }
      ],
      matchStats: players.map((player, index) => {
        return {
          ...player,
          team: index === 0 ? 'red' : 'blue'
        }
      })
    }
  }

  return {
    score: players.reduce((acc: { team: string; score: number }[], player) => {
      const team = acc.find((t) => t.team === player.team)
      const frags = player.stats.frags

      if (team) {
        team.score += frags
      } else {
        acc.push({ team: player?.team || 'no_team', score: frags })
      }

      return acc
    }, []),
    matchStats: players.map((player) => {
      return {
        ...player,
        team: player?.team || 'no_team'
      }
    })
  }
}

export const replaceParsedStrings = (data: Match) => {
  const { parsed_names, parsed_teams, ...rest } = data
  return {
    ...rest,
    teams: data.teams.map((team) => parsed_teams[team]),
    players: data.players.map((player) => {
      return {
        ...player,
        name: parsed_names[player.name],
        team: parsed_teams[player.team]
      }
    })
  }
}

export const replaceUnicodeStrings = (data: Match) => {
  const { unicode_names } = data
  return {
    ...data,
    teams: data.teams.map((team) => data.parsed_teams[team]),
    players: data.players.map((player) => {
      return {
        ...player,
        name: parseName(unicode_names[player.name])
      }
    })
  }
}

export function parseName(name: string) {
  const charMap: string[][] = [
    ['•', '', '', '', '', '•', '', '', '', '', '', '', '>', '>', '•', '•'],
    ['[', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '•', '-', '-', '-'],
    [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?'],
    ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_'],
    ["'", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '{', '|', '}', '~', ' '],
    ['(', '=', ')', '.', '.', '.', '.', '.', '.', '.', '.', '.', '>', '>', '•', '•'],
    ['[', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '•', '-', '-', '-'],
    [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?'],
    ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_'],
    ['`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ' ']
  ]

  let nick = ''
  const codePoints = name.match(/\\u[0-9a-fA-F]{4}/g) || []

  for (const codePoint of codePoints) {
    const charCode = parseInt(codePoint.slice(2), 16)
    if (charCode < 128) {
      nick += String.fromCharCode(charCode)
    } else {
      const row = (charCode >> 4) & 0xf
      const column = charCode & 0xf
      nick += charMap[row][column]
    }
  }

  return nick
}
