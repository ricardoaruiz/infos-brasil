import { type CEP } from './types'

const CEP_URI = '/cep/v1'
const CEP_URL = `${process.env.BRASIL_API_BASE_URL}${CEP_URI}`

/**
 * Get CEP informations by code
 * @param cep
 * @returns CEP informations
 */
export const getCEP = async (cep: string): Promise<CEP | null> => {
  const response = await fetch(`${CEP_URL}/${cep}`)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error('Error on get cep')
  }

  const data = (await response.json()) as CEP
  return data
}
