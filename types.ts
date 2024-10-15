export interface ParsedMatch {
  version: number
  date: string
  map: string
  hostname: string
  ip: string
  port: number
  mode: string
  tl: number
  dm: number
  tp: number
  duration: number
  demo: string
  teams: string[]
  players: Player[]
  parsed_names?: Record<string, string>
  parsed_teams?: Record<string, string>
  unicode_names?: Record<string, string>
}
export interface Match {
  version: number
  date: string
  map: string
  hostname: string
  ip: string
  port: number
  mode: string
  tl: number
  dm: number
  tp: number
  duration: number
  demo: string
  teams: string[]
  players: Player[]
  parsed_names: Record<string, string>
  parsed_teams: Record<string, string>
  unicode_names: Record<string, string>
}

export interface Player {
  'top-color': number
  'bottom-color': number
  ping: number
  login: string
  name: string
  team: string
  stats: Stats
  dmg: Dmg
  'xfer-rl': number
  'xfer-lg': number
  spree: Spree
  control: number
  speed: Speed
  weapons: Weapons
  items: Items
  ctf: boolean
  bot: boolean
}

export interface Stats {
  frags: number
  deaths: number
  tk: number
  'spawn-frags': number
  kills: number
  suicides: number
}

export interface Dmg {
  taken: number
  given: number
  team: number
  self: number
  'team-weapons': number
  'enemy-weapons': number
  'taken-to-die': number
}

export interface Spree {
  max: number
  quad: number
}

export interface Speed {
  avg: number
  max: number
}

export interface Weapons {
  sg: Weapon
  ng: Weapon
  ssg: Weapon
  sng: Weapon
  gl: Weapon
  rl: Weapon
  lg: Weapon
}

export interface Weapon {
  acc: Acc
  kills: Kills
  deaths: number
  pickups: Pickups
  damage: Damage
}

export interface Acc {
  attacks: number
  hits: number
}

export interface Kills {
  total: number
  team: number
  enemy: number
  self: number
}

export interface Pickups {
  dropped: number
  taken: number
  'total-taken': number
  'spawn-taken': number
  'spawn-total-taken': number
}

export interface Damage {
  enemy: number
  team: number
}

export interface Items {
  health_15: Item
  health_25: Item
  health_100: Item
  ga: Item
  ya: Item
  ra: Item
}

export interface Item {
  took: number
  time?: number
}
