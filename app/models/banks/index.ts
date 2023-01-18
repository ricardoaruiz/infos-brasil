import type { Bank } from './types'

const BANK = '/banks/v1'
const BANK_URL = `${process.env.BRASIL_API_BASE_URL}${BANK}`

/**
 * Get list of all banks
 * @returns list of all banks
 */
export const getBanks = async (): Promise<Bank[]> => {
  const response = await fetch(BANK_URL)
  const data = (await response.json()) as Bank[]
  const banks = data.filter((bank) => bank.code)

  return banks
}

/**
 * Get a specific bank
 * @param code  bank code
 * @returns bank
 */
export const getBank = async (code: string): Promise<Bank> => {
  const response = await fetch(`${BANK_URL}/${code}`)
  const data = (await response.json()) as Bank

  return data
}
