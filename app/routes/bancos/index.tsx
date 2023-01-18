import type {
  ActionArgs,
  ErrorBoundaryComponent,
  LoaderArgs,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'

import {
  Card,
  ErrorHandler,
  NoDataFound,
  SimpleSearchForm,
  Table,
  TableDataCel,
  TableHeaderCell,
  TableRow,
  Text,
} from '~/components'
import { getBanks } from '~/models/banks'
import type { Bank } from '~/models/banks/types'

type LoaderType = {
  search: string | null
  banks: Bank[]
}

/**
 * Remove banks has no code and sort them by code
 * @param banks
 * @param search
 * @returns list of banks
 */
const getBanksData = (banks: Bank[], search: string | null): Bank[] => {
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
export const loader = async ({ request }: LoaderArgs): Promise<LoaderType> => {
  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  const banks = await getBanks()
  return { banks: getBanksData(banks, search), search }
}

/**
 * Get search term from form and redirect writing url wuth search term
 * @param request
 * @returns
 */
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const search = formData.get('search')
  return redirect(`/bancos${search ? `?search=${search}` : ''}`)
}

/**
 * Index component
 * @returns component
 */
export default function BanksIndex() {
  const navigate = useNavigate()
  const { banks, search } = useLoaderData<typeof loader>()

  return (
    <>
      <Card>
        <Text as="h2" className="text-center text-2xl font-bold">
          Filtro
        </Text>

        <SimpleSearchForm
          searchFieldName="search"
          searchValue={search}
          placeholder="Informe o banco que deseja encontrar"
        />
      </Card>

      {!banks.length && <NoDataFound />}

      {!!banks.length && (
        <>
          <Text>Lista completa de Bancos</Text>

          <Table>
            <thead>
              <TableRow>
                <TableHeaderCell>Código</TableHeaderCell>
                <TableHeaderCell>Nome</TableHeaderCell>
                <TableHeaderCell>Nome completo</TableHeaderCell>
              </TableRow>
            </thead>

            <tbody className="bg-grey-light overflow-y-scroll h-10">
              {banks.map(({ name, fullName, code, ispb }) => (
                <TableRow
                  key={code}
                  onClick={() => navigate(`/bancos/${code}`)}
                  isHoverEffect
                >
                  <TableDataCel>{code}</TableDataCel>
                  <TableDataCel>{name}</TableDataCel>
                  <TableDataCel>{fullName}</TableDataCel>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
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
