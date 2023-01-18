import type { ErrorBoundaryComponent, LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'

import {
  ErrorHandler,
  Table,
  TableDataCellDetailTitle,
  TableDataCellDetailValue,
  TableRow,
  Text,
} from '~/components'
import { getBank } from '~/domains/banks/banks.server'
import { type Bank } from '~/domains/banks/types.server'

export const loader = async ({ params }: LoaderArgs) => {
  const { code } = params

  if (!code || code === 'null') {
    return redirect('/bancos')
  }

  const bank = await getBank(code)

  return bank
}

export default function BankDetail() {
  const navigate = useNavigate()
  const { code, name, fullName, ispb } = useLoaderData() as Bank

  return (
    <>
      <Text as="h2" className="text-center text-2xl font-bold">
        Banco
      </Text>

      <Table>
        <tbody>
          <TableRow>
            <TableDataCellDetailTitle>Código</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{code}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>Nome</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{name}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>Nome Completo</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{fullName}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>ISPB</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{ispb}</TableDataCellDetailValue>
          </TableRow>
        </tbody>
      </Table>

      <p
        role="link"
        onClick={() => navigate(-1)}
        className="
          inline-block
          mt-5
          font-bold
          hover:text-red-400
          cursor-pointer
        "
      >
        {'< '}Voltar
      </p>
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
    <Text as="p">Erro no detalhamento de bancos</Text>
  </ErrorHandler>
)
