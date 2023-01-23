import { useNavigate } from '@remix-run/react'

import {
  Table,
  TableDataCellDetailTitle,
  TableDataCellDetailValue,
  TableRow,
} from '~/components'

import type { CepTypes } from '..'

export const CepDetail = ({ data }: CepTypes.CepDetailNs.CepDetailProps) => {
  const navigate = useNavigate()
  const { cep, state, city, neighborhood, street } = data

  return (
    <>
      <Table>
        <tbody>
          <TableRow>
            <TableDataCellDetailTitle>CEP</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{cep}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>Estado</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{state}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>Cidade</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{city}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>Bairro</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{neighborhood}</TableDataCellDetailValue>
          </TableRow>
          <TableRow>
            <TableDataCellDetailTitle>Rua</TableDataCellDetailTitle>
            <TableDataCellDetailValue>{street}</TableDataCellDetailValue>
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
  )
}
