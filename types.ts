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

// Collection Types
export type UsersRecord = {
  id: string
  name?: string
  avatar?: string
  avatarUrl?: string
  nicknames?: string[]
}

export type DamageRecord = {
  id: string
  taken?: number
  given?: number
  team?: number
  self?: number
  taken_to_die?: number
  enemy_weapons?: number
  team_weapons?: number
  player?: string // Relation to players
  match?: string // Relation to matches
}

export type ItemsRecord = {
  id: string
  health_15?: any // JSON
  health_25?: any // JSON
  health_100?: any // JSON
  ya?: any // JSON - Yellow Armor
  ra?: any // JSON - Red Armor
  q?: any // JSON - Quad
  r?: any // JSON
  p?: any // JSON - Pent
  player?: string // Relation to players
  match?: string // Relation to matches
  quads?: number
  pents?: number
  rings?: number
}

export type MatchesRecord = {
  id: string
  version?: number
  map?: string
  hostname?: string
  ip?: string
  port?: number
  mode?: string
  tl?: number
  tp?: number
  fl?: number
  dm?: number
  duration?: number
  demo?: string
  score?: any // JSON
  players?: string[] // Relation to players
  stats?: any // JSON
  hash?: string
  date?: string
}

export type NewsRecord = {
  id: string
  title?: string
  subtitle?: string
  article_rich?: string
  article?: string
  images?: string[]
  featured?: boolean
  user?: string // Relation to users
}

export type NicknamesRecord = {
  id: string
  nick?: string
}

export type PlayersRecord = {
  id: string
  name?: string
  email?: string
  nicks?: any // JSON
  user?: string // Relation to users
  team?: string // Relation to teams
  stats?: string[] // Relation to stats
  damage?: string[] // Relation to damage
  weapons?: string[] // Relation to weapons
  spree?: string[] // Relation to spree
  speed?: string[] // Relation to speed
  matches?: string[] // Relation to matches
  login?: string
  country?: string
}

export type SpeedRecord = {
  id: string
  max?: number
  avg?: number
  player?: string // Relation to players
  match?: string // Relation to matches
}

export type SpreeRecord = {
  id: string
  max?: number
  quad?: number
  player?: string // Relation to players
  match?: string // Relation to matches
}

export type StatsRecord = {
  id: string
  match?: string // Relation to matches
  player?: string // Relation to players
  frags?: number
  deaths?: number
  tk?: number
  spawn?: number
  kills?: number
  suicides?: number
  kdr?: number
  result?: 'win' | 'loss'
}

export type TournamentGamesRecord = {
  id: string
  tournament?: string // Relation to tournaments
  date?: string
  mode?: string
  map?: string
  phase?: string
  team1?: string // Relation to tournament teams
  team2?: string // Relation to tournament teams
}

export type TournamentTeamsRecord = {
  id: string
  name?: string
  tournament?: string[] // Relation to tournaments
  players?: string[] // Relation to players
}

export type TeamsRecord = {
  id: string
  players?: string[] // Relation to players
  name?: string
}

export type TournamentsRecord = {
  id: string
  name?: string
  description?: string
  start_date?: string
  end_date?: string
}

export type WeaponsRecord = {
  id: string
  sg?: any // JSON
  ssg?: any // JSON
  ng?: any // JSON
  sng?: any // JSON
  gl?: any // JSON
  rl?: any // JSON
  lg?: any // JSON
  player?: string // Relation to players
  match?: string // Relation to matches
  sg_acc?: number
  ssg_acc?: number
  ng_acc?: number
  sng_acc?: number
  gl_acc?: number
  rl_acc?: number
  lg_acc?: number
}

// View Types
export type HighestKdrView = {
  id: string
  match?: string // Relation to matches
  player?: string // Relation to players
  kdr?: any // JSON
}

export type HighestKillsView = {
  id: string
  match?: string // Relation to matches
  player?: string // Relation to players
  kills?: any // JSON
}

export type HighestStreakView = {
  id: string
  match?: string // Relation to matches
  player?: string // Relation to players
  max?: any // JSON
}

export type HighestTeamkillsView = {
  id: string
  player_id?: string // Relation to players
  player_name?: string
  matches_played?: any // JSON
  total_teamkills?: any // JSON
  avg_teamkills_per_match?: number
}

export type LastMatchesView = {
  id: string
  day_of_week?: any // JSON
  date?: any // JSON
  match_count?: any // JSON
  total_frags?: any // JSON
}

export type MatchesPlayedView = {
  id: string
  date?: any // JSON
  count?: number
}

export type MaxAvgStats = {
  id: string
  player?: string // Relation to players
  value?: number
}

export type MinAvgStats = {
  id: string
  player?: string // Relation to players
  value?: number
}

export type MostPlayedMapsView = {
  id: string
  map?: string
  times_played?: number
}

export type PlayerStatsView = {
  id: string
  player?: string // Relation to players
  date?: any // JSON
  frags?: number
  kills?: number
  deaths?: number
  teamkills?: number
  suicides?: number
  matches?: number
  wins?: number
  time_played?: number
  quads?: number
}

export type PlayerWeaponsView = {
  id: string
  player?: string // Relation to players
  date?: any // JSON
  weapon_attacks: number
  weapon_hits: number
  weapon_acc: any // JSON
  matches?: number
  [key: string]: any // For dynamic weapon fields
}

export type RatingStatsView = {
  id: string
  match?: any // JSON
  best_kills_player?: any // JSON
  max_kills?: any // JSON
  best_kdr_player?: any // JSON
  max_kdr?: any // JSON
  most_deaths_player?: any // JSON
  max_deaths?: any // JSON
  best_frags_player?: any // JSON
  max_frags?: any // JSON
  most_teamkills_player?: any // JSON
  max_teamkills?: any // JSON
  most_suicides_player?: any // JSON
  max_suicides?: any // JSON
}

export type TimePlayedView = {
  id: string
  player_id?: string // Relation to players
  player_name?: string
  match_date?: any // JSON
  matches_played?: number
  total_playtime?: number
}

export type Top10AccuracyView = {
  id: string
  player?: string // Relation to players
  total_attacks?: any // JSON
  total_hits?: any // JSON
  accuracy?: any // JSON
}

// Utility Types
export type WeaponTypes = 'sg' | 'ssg' | 'ng' | 'sng' | 'gl' | 'rl' | 'lg'

export type WeaponStats = {
  acc: {
    attacks: number
    hits: number
  }
  kills: number
  deaths: number
}

export type Collections = {
  users: UsersRecord
  damage: DamageRecord
  items: ItemsRecord
  matches: MatchesRecord
  news: NewsRecord
  nicknames: NicknamesRecord
  players: PlayersRecord
  speed: SpeedRecord
  spree: SpreeRecord
  stats: StatsRecord
  t_games: TournamentGamesRecord
  t_teams: TournamentTeamsRecord
  teams: TeamsRecord
  tournaments: TournamentsRecord
  weapons: WeaponsRecord
  highest_kdr: HighestKdrView
  highest_kills: HighestKillsView
  highest_streak: HighestStreakView
  highest_teamkills: HighestTeamkillsView
  last_matches: LastMatchesView
  matches_played: MatchesPlayedView
  most_played_maps: MostPlayedMapsView
  player_stats: PlayerStatsView
  player_weapons: PlayerWeaponsView
  rating_stats: RatingStatsView
  time_played: TimePlayedView
}
