import DriverStandingData from './DriverStandingData'

interface StandingsList {
  season: string
  round: string
  DriverStandings: DriverStandingData[]
}

export default interface DriversStanding {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
  StandingsTable: {
    season: string
    StandingsLists: StandingsList[]
  }
}
