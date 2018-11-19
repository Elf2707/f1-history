import Race from './Race'

export default interface SeasonDetails {
  RaceTable: {
    season: string
    Races: Race[]
  }
  limit: string
  offset: string
  series: string
  total: string
  url: string
  xmlns: string
}
