import type { ApiNs } from '~/types'

import { type CepTypes } from '.'

const CEP_URI = '/cep/v1'
const CEP_URL = `${process.env.BRASIL_API_BASE_URL}${CEP_URI}`

/**
 * Get CEP informations by code
 * @param cep
 * @returns CEP informations
 */
export const getCEP = async (
  cep: string
): Promise<ApiNs.ResponseData<CepTypes.CEP>> => {
  const response = await fetch(`${CEP_URL}/${cep}`)

  if (response.status === 404) {
    return {
      data: null,
      error: null,
    }
  }

  if (response.status >= 400) {
    const error = (await response.json()) as ApiNs.ResponseError
    return {
      data: null,
      error,
    }
  }

  if (!response.ok) {
    throw new Error('Error on get cep')
  }

  const data = (await response.json()) as CepTypes.CEP
  return {
    data,
    error: null,
  }
}
