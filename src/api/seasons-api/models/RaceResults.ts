import CircuitData from './CircuitData'
import ResultsData from './ResultsData'

export default interface RaceResults {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: CircuitData
  date: string
  time: string
  Results: ResultsData[]
}
