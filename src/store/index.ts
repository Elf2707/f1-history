import { configure } from 'mobx'

import SeasonsStore from './seasons-store'
import Api from '../api'

export enum StoresNames {
  Seasons = 'seasons'
}

configure({ enforceActions: 'observed' })

export class Store {
  api: Api
  seasons: SeasonsStore

  constructor() {
    this.seasons = new SeasonsStore(this)
    this.api = new Api()
  }
}

export default new Store()
