import RaceResults from './RaceResults'

export default interface SeasonResults {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
  RaceTable: {
    season: string
    position: string
    Races: RaceResults[]
  }
}
