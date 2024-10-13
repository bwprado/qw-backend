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
