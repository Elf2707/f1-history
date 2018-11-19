import { observable, computed, flow } from 'mobx'
import { FlowIterator } from 'mobx/lib/api/flow'
import _ from 'lodash'

import { Store as MainStore } from '../index'
import { GENERAL_ERROR } from '../../common/messages'
import SeasonDetails from '../../api/seasons-api/models/SeasonDetails'
import ApiResp from '../../api/models/ApiResp'
import SeasonResults from '../../api/seasons-api/models/SeasonResults'
import DriversStanding from '../../api/seasons-api/models/DriversStanding'
import Race from '../../api/seasons-api/models/Race'
import RaceResults from '../../api/seasons-api/models/RaceResults'

export default class SeasonsStore {
  @observable loading: boolean = false
  @observable seasons: number[] = _.range(2005, 2016)
  @observable error: string = ''
  @observable seasonDetails: SeasonDetails | null = null
  @observable seasonResults: SeasonResults | null = null
  @observable seasonResultsForPlace: SeasonResults | null = null
  @observable driversStandings: DriversStanding | null = null

  mainStore: MainStore

  constructor(mainStore: MainStore) {
    this.mainStore = mainStore
  }

  @computed
  get racesInSeason(): Race[] {
    if (!this.seasonResults) return []
    return this.seasonResults.RaceTable.Races.slice()
  }

  @computed
  get racesWithWinners(): RaceResults[] {
    if (!this.seasonResultsForPlace) return []
    return this.seasonResultsForPlace.RaceTable.Races.slice()
  }

  @computed
  get seasonWinner() {
    if (!this.driversStandings) return null
    return this.driversStandings.StandingsTable.StandingsLists[0].DriverStandings[0]
  }

  isGoodResponse(response: ApiResp<any>): boolean {
    return response && response.status === 200 && response.data && response.data.MRData
  }

  getSeasonDetails = flow(function*(this: SeasonsStore, seasonId: number): FlowIterator<any> {
    if (seasonId !== null && seasonId !== undefined) {
      try {
        const { api } = this.mainStore
        this.loading = true

        const response = yield api.seasonsApi.getSeasonDetails(seasonId)
        if (this.isGoodResponse(response)) {
          this.seasonDetails = response.data.MRData
          this.loading = false
        } else {
          throw new Error(GENERAL_ERROR)
        }
      } catch (error) {
        this.error = error.message || GENERAL_ERROR
        this.seasonDetails = null
        this.loading = false
      }
    }
  })

  getSeasonResults = flow(function*(this: SeasonsStore, seasonId: number): FlowIterator<any> {
    if (seasonId !== null && seasonId !== undefined) {
      try {
        const { api } = this.mainStore
        this.loading = true

        const response = yield api.seasonsApi.getSeasonResults(seasonId)
        if (this.isGoodResponse(response)) {
          this.seasonResults = response.data.MRData
          this.loading = false
        } else {
          throw new Error(GENERAL_ERROR)
        }
      } catch (error) {
        this.error = error.message || GENERAL_ERROR
        this.seasonResults = null
        this.loading = false
      }
    }
  })

  getSeasonResultsForPlace = flow(function*(
    this: SeasonsStore,
    seasonId: number,
    place: number = 1
  ): FlowIterator<any> {
    if (seasonId !== null && seasonId !== undefined) {
      try {
        const { api } = this.mainStore
        this.loading = true

        const response = yield api.seasonsApi.getSeasonResultsForPlace(seasonId, place)
        if (this.isGoodResponse(response)) {
          this.seasonResultsForPlace = response.data.MRData
          this.loading = false
        } else {
          throw new Error(GENERAL_ERROR)
        }
      } catch (error) {
        this.error = error.message || GENERAL_ERROR
        this.seasonResultsForPlace = null
        this.loading = false
      }
    }
  })

  getDriversStandings = flow(function*(this: SeasonsStore, seasonId: number): FlowIterator<any> {
    if (seasonId !== null && seasonId !== undefined) {
      try {
        const { api } = this.mainStore
        this.loading = true

        const response = yield api.seasonsApi.getDriversStandings(seasonId)
        if (this.isGoodResponse(response)) {
          this.driversStandings = response.data.MRData
          this.loading = false
        } else {
          throw new Error(GENERAL_ERROR)
        }
      } catch (error) {
        this.error = error.message || GENERAL_ERROR
        this.driversStandings = null
        this.loading = false
      }
    }
  })
}
