import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { ErrorHandler, Text } from '~/components'
import { type BankTypes, BankList, BanksApi } from '~/features/banks'

/**
 * Remove banks has no code and sort them by code
 * @param banks
 * @param search
 * @returns list of banks
 */
const getBanksData = (
  banks: BankTypes.Bank[] | null,
  search: string | null
): BankTypes.Bank[] => {
  if (!banks) return []

  const banksData = search
    ? banks.filter((bank) =>
        bank.name
          .toLocaleLowerCase()
          .includes(search.toString().toLocaleLowerCase())
      )
    : banks

  return banksData.sort((bk1, bk2) => Number(bk1.code) - Number(bk2.code))
}

/**
 * Load data with or without search term received from action
 * @param request
 * @returns list of banks and search term
 */
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const searchParam = url.searchParams.get('search')
  const search = searchParam ? decodeURI(searchParam) : ''
  const banksData = await BanksApi.getBanks()
  return {
    search,
    data: getBanksData(banksData.data, search),
    error: banksData.error,
  }
}

/**
 * Get search term from form and redirect writing url wuth search term
 * @param request
 * @returns
 */
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const searchField = formData.get('search')
  const search = searchField ? encodeURI(searchField.toString()) : ''
  return redirect(`/bancos${search ? `?search=${search}` : ''}`)
}

/**
 * Index component
 * @returns component
 */
export default function () {
  const { data, search } = useLoaderData<BankTypes.BankListNs.LoaderData>()

  return <BankList search={search} data={data} />
}

/**
 * Handle error from this route
 * @param param0
 * @returns Error component to render
 */
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorHandler error={error}>
    <Text as="p">Erro no index de bancos</Text>
  </ErrorHandler>
)
