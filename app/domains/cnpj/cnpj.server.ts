import type { ResponseData, ResponseError } from '../types.server'

import type { CNPJ } from './types.server'

const CNPJ_URI = '/cnpj/v1'
const CNPJ_URL = `${process.env.BRASIL_API_BASE_URL}${CNPJ_URI}`

export const getCNPJ = async (cnpj: string): Promise<ResponseData<CNPJ>> => {
  const response = await fetch(`${CNPJ_URL}/${cnpj}`)

  if (response.status === 404) {
    return {
      data: null,
      error: null,
    }
  }

  if (response.status === 400) {
    const error = (await response.json()) as ResponseError
    return {
      data: null,
      error,
    }
  }

  if (!response.ok) {
    throw new Error('Error on getCNPJ')
  }

  const data = (await response.json()) as CNPJ
  return {
    data,
    error: null,
  }
}
