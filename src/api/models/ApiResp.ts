export default interface ApiResp<T = any> {
  data: { MRData: T }
  status: number
  statusText: string
}
