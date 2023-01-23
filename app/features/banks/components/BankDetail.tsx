import { useNavigate } from '@remix-run/react'

import {
  Table,
  TableDataCellDetailTitle,
  TableDataCellDetailValue,
  TableRow,
  Text,
} from '~/components'

import type { BankDetailNs } from '../Banks.types'

export const BankDetail = ({ data }: BankDetailNs.BankDetailProps) => {
  const navigate = useNavigate()
  const { code, fullName, ispb, name } = data

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
