import CircuitData from './CircuitData'

export default interface Race {
  Circuit: CircuitData
  date: string
  raceName: string
  round: string
  season: string
  time: string
  url: string
}
