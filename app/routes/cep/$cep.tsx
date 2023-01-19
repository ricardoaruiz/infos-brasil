import type {
  ActionArgs,
  ErrorBoundaryComponent,
  LoaderArgs,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'

import {
  ErrorHandler,
  NoDataFound,
  Table,
  TableDataCellDetailTitle,
  TableDataCellDetailValue,
  TableRow,
  Text,
} from '~/components'
import { getCEP } from '~/domains/cep/cep.server'
import type { CEP } from '~/domains/cep/types.server'

type LoaderType = {
  data: CEP | null
}

export const loader = async ({ params }: LoaderArgs): Promise<LoaderType> => {
  const { cep } = params
  const data = cep ? await getCEP(cep) : null

  return { data }
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const search = form.get('search')
  return redirect(`/cep${search ? `?search=${search}` : ''}`)
}

const CEPIndex = () => {
  const navigate = useNavigate()
  const { data } = useLoaderData<typeof loader>()

  return (
    <>
      {!data && <NoDataFound />}

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
