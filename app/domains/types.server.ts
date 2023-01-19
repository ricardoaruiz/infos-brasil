export type ResponseData<D> = {
  data: D | null
  error: ResponseError | null
}
export type ResponseError = {
  message: string
  type: string
  name?: string
  errors?: {
    message: string
    service: string
  }[]
}
