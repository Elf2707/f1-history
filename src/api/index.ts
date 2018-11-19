import axios, { AxiosPromise, AxiosResponse } from 'axios'
import SeasonsApi from './seasons-api'

export enum ReqMethods {
  GET = 'get',
  POST = 'post',
  HEAD = 'head',
  DELETE = 'delete',
  PUT = 'put'
}

export interface ReqParams {
  method?: ReqMethods
}

const DEFAULT_REQ_TIMEOUT = '5000'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: +(process.env.REACT_APP_REQ_TIMEOUT || DEFAULT_REQ_TIMEOUT)
})

export default class Api {
  seasonsApi: SeasonsApi

  constructor() {
    this.seasonsApi = new SeasonsApi(this)
  }

  request<T = any>(url: string, params: ReqParams = {}): AxiosPromise<AxiosResponse<T>> {
    return axiosInstance.request<AxiosResponse<T>>({ url: `${url}.json`, ...params })
  }
}
