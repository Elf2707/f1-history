import { Store } from '..'
import SeasonsStore from '../seasons-store'
import { when } from 'mobx'

describe('Seasons Store Tests Suit', () => {
  let store: Store
  let seasonsStore: SeasonsStore

  beforeEach(() => {
    store = new Store()
    seasonsStore = new SeasonsStore(store)
  })

  it('Store creates right', () => {
    expect(seasonsStore.mainStore).toBe(store)
    expect(seasonsStore.mainStore.api).toBeTruthy()
  })

  it('getSeasonDetails action should call right api method', () => {
    const mockFunction = jest.fn()
    store.api.seasonsApi.getSeasonDetails = mockFunction
    seasonsStore.getSeasonDetails(2005)

    expect(mockFunction).toBeCalledTimes(1)
    expect(mockFunction).toBeCalledWith(2005)
  })

  it('getSeasonDetails action should not call api if parameter === null | undefined', () => {
    const mockFunction = jest.fn()
    store.api.seasonsApi.getSeasonDetails = mockFunction
    seasonsStore.getSeasonDetails(null)
    seasonsStore.getSeasonDetails(undefined)

    expect(mockFunction).toBeCalledTimes(0)
  })

  it('getSeasonDetails should set right data in the store and clear loading state', done => {
    const testData = ['one', 'two', 'three']
    const mockFunction = jest.fn().mockImplementationOnce(() => ({
      status: 200,
      data: {
        MRData: testData
      }
    }))

    store.api.seasonsApi.getSeasonDetails = mockFunction
    expect(seasonsStore.loading).toBe(false)

    seasonsStore.getSeasonDetails(2005)

    expect(seasonsStore.seasonDetails).toBeNull()
    expect(seasonsStore.error).toBe('')
    expect(seasonsStore.loading).toBe(true)
    expect(mockFunction).toBeCalledTimes(1)
    expect(seasonsStore.error).toBe('')

    when(
      () => seasonsStore.seasonDetails !== null,
      () => {
        expect(seasonsStore.seasonDetails).toEqual(testData)
        expect(seasonsStore.loading).toBe(false)
        done()
      }
    )
  })

  it('getSeasonResultsForPlace action should call right api method', () => {
    const mockFunction = jest.fn()
    store.api.seasonsApi.getSeasonResultsForPlace = mockFunction
    seasonsStore.getSeasonResultsForPlace(2005, 1)

    expect(mockFunction).toBeCalledTimes(1)
    expect(mockFunction).toBeCalledWith(2005, 1)
  })

  it('getSeasonResultsForPlace action should not call api if seasonId === null | undefined', () => {
    const mockFunction = jest.fn()
    store.api.seasonsApi.getSeasonResultsForPlace = mockFunction
    seasonsStore.getSeasonResultsForPlace(null, 1)
    seasonsStore.getSeasonResultsForPlace(undefined, 1)

    expect(mockFunction).toBeCalledTimes(0)
  })

  it('getSeasonResultsForPlace should set right data in the store and clear loading state', done => {
    const testData = ['one', 'two', 'three']
    const mockFunction = jest.fn().mockImplementationOnce(() => ({
      status: 200,
      data: {
        MRData: testData
      }
    }))

    store.api.seasonsApi.getSeasonResultsForPlace = mockFunction
    expect(seasonsStore.loading).toBe(false)

    seasonsStore.getSeasonResultsForPlace(2005, 1)

    expect(seasonsStore.seasonResultsForPlace).toBeNull()
    expect(seasonsStore.error).toBe('')
    expect(seasonsStore.loading).toBe(true)
    expect(mockFunction).toBeCalledTimes(1)
    expect(seasonsStore.error).toBe('')

    when(
      () => seasonsStore.seasonResultsForPlace !== null,
      () => {
        expect(seasonsStore.seasonResultsForPlace).toEqual(testData)
        expect(seasonsStore.loading).toBe(false)
        done()
      }
    )
  })
})
