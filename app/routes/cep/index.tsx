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
  TableDataCellDetailTitle,
  TableDataCellDetailValue,
  TableRow,
  Text,
} from '~/components'
import { getCEP } from '~/models/cep'
import type { CEP } from '~/models/cep/types'

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const search = form.get('search')
  return redirect(`/cep${search ? `?search=${search}` : ''}`)
}

type LoaderType = {
  data: CEP | null
  search?: string | null
}

export const loader = async ({ request }: LoaderArgs): Promise<LoaderType> => {
  const url = new URL(request.url)
  const search = url.searchParams.get('search')
  const data = search ? await getCEP(search) : null

  return { data, search }
}

const CEPIndex = () => {
  const navigate = useNavigate()
  const { data, search } = useLoaderData<typeof loader>()

  return (
    <>
      <Text as="h1" className="text-center text-4xl mb-2">
        CEP
      </Text>

      <Card>
        <Text as="h2" className="text-center text-2xl font-bold">
          Busca
        </Text>

        <SimpleSearchForm
          searchFieldName="search"
          searchValue={search}
          searchFieldMaxLength={8}
          placeholder="Informe o CEP"
        />
      </Card>

      {!data && search && <NoDataFound />}

      {data && (
        <>
          <Table>
            <tbody>
              <TableRow>
                <TableDataCellDetailTitle>CEP</TableDataCellDetailTitle>
                <TableDataCellDetailValue>{data.cep}</TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Estado</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.state}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Cidade</TableDataCellDetailTitle>
                <TableDataCellDetailValue>{data.city}</TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Bairro</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.neighborhood}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Rua</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.street}
                </TableDataCellDetailValue>
              </TableRow>
            </tbody>
          </Table>

          <p
            role="link"
            onClick={() => navigate('/cep')}
            className="
              inline-block
              mt-5
              font-bold
              hover:text-red-400
              cursor-pointer
            "
          >
            Limpar
          </p>
        </>
      )}
    </>
  )
}

export default CEPIndex

/**
 * Handle error from this route
 * @param param0
 * @returns Error component to render
 */
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorHandler error={error}>
    <Text as="p">Erro no index do cep</Text>
  </ErrorHandler>
)
