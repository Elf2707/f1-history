import DriverData from './DriverData'
import ConstructorData from './ConstructorData'

export default interface DriverStandingData {
  position: string
  positionText: string
  points: string
  wins: string
  Driver: DriverData
  Constructors: ConstructorData[]
}
