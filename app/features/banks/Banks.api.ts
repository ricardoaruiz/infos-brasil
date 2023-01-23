import type { ApiNs } from '~/types'

import type { BankTypes } from '.'

const BANK = '/banks/v1'
const BANK_URL = `${process.env.BRASIL_API_BASE_URL}${BANK}`

/**
 * Get list of all banks
 * @returns list of all banks
 */
export const getBanks = async (): Promise<
  ApiNs.ResponseData<BankTypes.Bank[]>
> => {
  const response = await fetch(BANK_URL)

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

  const data = (await response.json()) as BankTypes.Bank[]
  return {
    data: data.filter((bank) => bank.code),
    error: null,
  }
}

/**
 * Get a specific bank
 * @param code  bank code
 * @returns bank
 */
export const getBank = async (
  code: string
): Promise<ApiNs.ResponseData<BankTypes.Bank>> => {
  const response = await fetch(`${BANK_URL}/${code}`)

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

  const data = (await response.json()) as BankTypes.Bank
  return {
    data,
    error: null,
  }
}
