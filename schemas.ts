import { z } from 'npm:zod'

// Base schemas for common patterns
const idSchema = z.string();
const optionalString = z.string().optional();
const optionalNumber = z.number().optional();
const relationSchema = z.string(); // for single relations
const relationsSchema = z.array(z.string()); // for multiple relations
const jsonSchema = z.any(); // for JSON fields

// Collection Schemas
export const usersSchema = z.object({
    id: idSchema,
    name: optionalString,
    avatar: optionalString,
    avatarUrl: optionalString,
    nicknames: relationsSchema.optional(),
});

export const damageSchema = z.object({
    id: idSchema,
    taken: optionalNumber,
    given: optionalNumber,
    team: optionalNumber,
    self: optionalNumber,
    taken_to_die: optionalNumber,
    enemy_weapons: optionalNumber,
    team_weapons: optionalNumber,
    player: relationSchema.optional(),
    match: relationSchema.optional(),
});

export const itemsSchema = z.object({
    id: idSchema,
    health_15: jsonSchema.optional(),
    health_25: jsonSchema.optional(),
    health_100: jsonSchema.optional(),
    ya: jsonSchema.optional(),
    ra: jsonSchema.optional(),
    q: jsonSchema.optional(),
    r: jsonSchema.optional(),
    p: jsonSchema.optional(),
    player: relationSchema.optional(),
    match: relationSchema.optional(),
    quads: optionalNumber,
    pents: optionalNumber,
    rings: optionalNumber,
});

export const matchesSchema = z.object({
    id: idSchema,
    version: optionalNumber,
    map: optionalString,
    hostname: optionalString,
    ip: optionalString,
    port: optionalNumber,
    mode: optionalString,
    tl: optionalNumber,
    tp: optionalNumber,
    fl: optionalNumber,
    dm: optionalNumber,
    duration: optionalNumber,
    demo: optionalString,
    score: jsonSchema.optional(),
    players: relationsSchema.optional(),
    stats: jsonSchema.optional(),
    hash: optionalString,
    date: optionalString,
});

export const newsSchema = z.object({
    id: idSchema,
    title: optionalString,
    subtitle: optionalString,
    article_rich: optionalString,
    article: optionalString,
    images: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    user: relationSchema.optional(),
});

export const nicknamesSchema = z.object({
    id: idSchema,
    nick: optionalString,
});

export const playersSchema = z.object({
    id: idSchema,
    name: optionalString,
    email: z.string().email().optional(),
    nicks: jsonSchema.optional(),
    user: relationSchema.optional(),
    team: relationSchema.optional(),
    stats: relationsSchema.optional(),
    damage: relationsSchema.optional(),
    weapons: relationsSchema.optional(),
    spree: relationsSchema.optional(),
    speed: relationsSchema.optional(),
    matches: relationsSchema.optional(),
    login: optionalString,
    country: optionalString,
});

export const speedSchema = z.object({
    id: idSchema,
    max: optionalNumber,
    avg: optionalNumber,
    player: relationSchema.optional(),
    match: relationSchema.optional(),
});

export const spreeSchema = z.object({
    id: idSchema,
    max: optionalNumber,
    quad: optionalNumber,
    player: relationSchema.optional(),
    match: relationSchema.optional(),
});

export const statsSchema = z.object({
    id: idSchema,
    match: relationSchema.optional(),
    player: relationSchema.optional(),
    frags: optionalNumber,
    deaths: optionalNumber,
    tk: optionalNumber,
    spawn: optionalNumber,
    kills: optionalNumber,
    suicides: optionalNumber,
    kdr: optionalNumber,
    result: z.enum(['win', 'loss']).optional(),
});

export const tournamentGamesSchema = z.object({
    id: idSchema,
    tournament: relationSchema.optional(),
    date: optionalString,
    mode: optionalString,
    map: optionalString,
    phase: optionalString,
    team1: relationSchema.optional(),
    team2: relationSchema.optional(),
});

export const tournamentTeamsSchema = z.object({
    id: idSchema,
    name: optionalString,
    tournament: relationsSchema.optional(),
    players: relationsSchema.optional(),
});

export const teamsSchema = z.object({
    id: idSchema,
    players: relationsSchema.optional(),
    name: optionalString,
});

export const tournamentsSchema = z.object({
    id: idSchema,
    name: optionalString,
    description: optionalString,
    start_date: optionalString,
    end_date: optionalString,
});

export const weaponsSchema = z.object({
    id: idSchema,
    sg: jsonSchema.optional(),
    ssg: jsonSchema.optional(),
    ng: jsonSchema.optional(),
    sng: jsonSchema.optional(),
    gl: jsonSchema.optional(),
    rl: jsonSchema.optional(),
    lg: jsonSchema.optional(),
    player: relationSchema.optional(),
    match: relationSchema.optional(),
    sg_acc: optionalNumber,
    ssg_acc: optionalNumber,
    ng_acc: optionalNumber,
    sng_acc: optionalNumber,
    gl_acc: optionalNumber,
    rl_acc: optionalNumber,
    lg_acc: optionalNumber,
});

// View Schemas
export const highestKdrViewSchema = z.object({
    id: idSchema,
    match: relationSchema.optional(),
    player: relationSchema.optional(),
    kdr: jsonSchema.optional(),
});

export const highestKillsViewSchema = z.object({
    id: idSchema,
    match: relationSchema.optional(),
    player: relationSchema.optional(),
    kills: jsonSchema.optional(),
});

export const highestStreakViewSchema = z.object({
    id: idSchema,
    match: relationSchema.optional(),
    player: relationSchema.optional(),
    max: jsonSchema.optional(),
});

export const highestTeamkillsViewSchema = z.object({
    id: idSchema,
    player_id: relationSchema.optional(),
    player_name: optionalString,
    matches_played: jsonSchema.optional(),
    total_teamkills: jsonSchema.optional(),
    avg_teamkills_per_match: optionalNumber,
});

export const lastMatchesViewSchema = z.object({
    id: idSchema,
    day_of_week: jsonSchema.optional(),
    date: jsonSchema.optional(),
    match_count: jsonSchema.optional(),
    total_frags: jsonSchema.optional(),
});

export const matchesPlayedViewSchema = z.object({
    id: idSchema,
    date: jsonSchema.optional(),
    count: optionalNumber,
});

export const maxAvgStatsSchema = z.object({
    id: idSchema,
    player: relationSchema.optional(),
    value: optionalNumber,
});

export const minAvgStatsSchema = z.object({
    id: idSchema,
    player: relationSchema.optional(),
    value: optionalNumber,
});

export const mostPlayedMapsViewSchema = z.object({
    id: idSchema,
    map: optionalString,
    times_played: optionalNumber,
});

export const playerStatsViewSchema = z.object({
    id: idSchema,
    player: relationSchema.optional(),
    date: jsonSchema.optional(),
    frags: optionalNumber,
    kills: optionalNumber,
    deaths: optionalNumber,
    teamkills: optionalNumber,
    suicides: optionalNumber,
    matches: optionalNumber,
    wins: optionalNumber,
    time_played: optionalNumber,
    quads: optionalNumber,
});

export const playerWeaponsViewSchema = z.object({
    id: idSchema,
    player: relationSchema.optional(),
    date: jsonSchema.optional(),
    weapon_attacks: z.number(),
    weapon_hits: z.number(),
    weapon_acc: jsonSchema,
    matches: optionalNumber,
}).and(z.record(z.string(), z.any())); // For dynamic weapon fields

export const ratingStatsViewSchema = z.object({
    id: idSchema,
    match: jsonSchema.optional(),
    best_kills_player: jsonSchema.optional(),
    max_kills: jsonSchema.optional(),
    best_kdr_player: jsonSchema.optional(),
    max_kdr: jsonSchema.optional(),
    most_deaths_player: jsonSchema.optional(),
    max_deaths: jsonSchema.optional(),
    best_frags_player: jsonSchema.optional(),
    max_frags: jsonSchema.optional(),
    most_teamkills_player: jsonSchema.optional(),
    max_teamkills: jsonSchema.optional(),
    most_suicides_player: jsonSchema.optional(),
    max_suicides: jsonSchema.optional(),
});

export const timePlayedViewSchema = z.object({
    id: idSchema,
    player_id: relationSchema.optional(),
    player_name: optionalString,
    match_date: jsonSchema.optional(),
    matches_played: optionalNumber,
    total_playtime: optionalNumber,
});

export const top10AccuracyViewSchema = z.object({
    id: idSchema,
    player: relationSchema.optional(),
    total_attacks: jsonSchema.optional(),
    total_hits: jsonSchema.optional(),
    accuracy: jsonSchema.optional(),
});

// Collection type mapping
export const collections = {
    users: usersSchema,
    damage: damageSchema,
    items: itemsSchema,
    matches: matchesSchema,
    news: newsSchema,
    nicknames: nicknamesSchema,
    players: playersSchema,
    speed: speedSchema,
    spree: spreeSchema,
    stats: statsSchema,
    t_games: tournamentGamesSchema,
    t_teams: tournamentTeamsSchema,
    teams: teamsSchema,
    tournaments: tournamentsSchema,
    weapons: weaponsSchema,
} as const;

// View type mapping
export const views = {
    highest_kdr: highestKdrViewSchema,
    highest_kills: highestKillsViewSchema,
    highest_streak: highestStreakViewSchema,
    highest_teamkills: highestTeamkillsViewSchema,
    last_matches: lastMatchesViewSchema,
    matches_played: matchesPlayedViewSchema,
    most_played_maps: mostPlayedMapsViewSchema,
    player_stats: playerStatsViewSchema,
    player_weapons: playerWeaponsViewSchema,
    rating_stats: ratingStatsViewSchema,
    time_played: timePlayedViewSchema,
} as const;

// Types inferred from schemas
export type Users = z.infer<typeof usersSchema>;
export type Damage = z.infer<typeof damageSchema>;
export type Items = z.infer<typeof itemsSchema>;
export type Matches = z.infer<typeof matchesSchema>;
export type News = z.infer<typeof newsSchema>;
export type Nicknames = z.infer<typeof nicknamesSchema>;
export type Players = z.infer<typeof playersSchema>;
export type Speed = z.infer<typeof speedSchema>;
export type Spree = z.infer<typeof spreeSchema>;
export type Stats = z.infer<typeof statsSchema>;
export type TournamentGames = z.infer<typeof tournamentGamesSchema>;
export type TournamentTeams = z.infer<typeof tournamentTeamsSchema>;
export type Teams = z.infer<typeof teamsSchema>;
export type Tournaments = z.infer<typeof tournamentsSchema>;
export type Weapons = z.infer<typeof weaponsSchema>;

// View types
export type HighestKdr = z.infer<typeof highestKdrViewSchema>;
export type HighestKills = z.infer<typeof highestKillsViewSchema>;
export type HighestStreak = z.infer<typeof highestStreakViewSchema>;
export type HighestTeamkills = z.infer<typeof highestTeamkillsViewSchema>;
export type LastMatches = z.infer<typeof lastMatchesViewSchema>;
export type MatchesPlayed = z.infer<typeof matchesPlayedViewSchema>;
export type MostPlayedMaps = z.infer<typeof mostPlayedMapsViewSchema>;
export type PlayerStats = z.infer<typeof playerStatsViewSchema>;
export type PlayerWeapons = z.infer<typeof playerWeaponsViewSchema>;
export type RatingStats = z.infer<typeof ratingStatsViewSchema>;
export type TimePlayed = z.infer<typeof timePlayedViewSchema>;