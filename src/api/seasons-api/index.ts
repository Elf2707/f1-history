import Api from '../index'
import { AxiosPromise, AxiosResponse } from 'axios'
import SeasonResults from './models/SeasonResults'
import DriversStanding from './models/DriversStanding'
import SeasonDetails from './models/SeasonDetails'

export default class SeasonsApi {
  api: Api

  constructor(api: Api) {
    this.api = api
  }

  getAllSeasons() {
    return this.api.request('seasons')
  }

  getSeasonDetails(seasonId: number): AxiosPromise<AxiosResponse<SeasonDetails>> {
    return this.api.request<SeasonDetails>(`${seasonId}`)
  }

  getDriversStandings(seasonId: number): AxiosPromise<AxiosResponse<DriversStanding>> {
    return this.api.request<DriversStanding>(String(`${seasonId}/driverStandings`))
  }

  getSeasonResults(seasonId: number): AxiosPromise<AxiosResponse<SeasonResults>> {
    return this.api.request<SeasonResults>(String(`${seasonId}/results`))
  }

  getSeasonResultsForPlace(
    seasonId: number,
    place: number
  ): AxiosPromise<AxiosResponse<SeasonResults>> {
    return this.api.request<SeasonResults>(String(`${seasonId}/results/${place}`))
  }
}
