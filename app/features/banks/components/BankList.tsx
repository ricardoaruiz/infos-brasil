import { useNavigate } from '@remix-run/react'

import {
  Card,
  NoDataFound,
  SimpleSearchForm,
  Table,
  TableDataCel,
  TableHeaderCell,
  TableRow,
  Text,
} from '~/components'

import type { BankListNs } from '../Banks.types'

export const BankList = ({ data, search }: BankListNs.BankListProps) => {
  const navigate = useNavigate()

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

      {!data && <NoDataFound />}

      {!!data && (
        <>
          <Text as="h2" className="text-center text-2xl font-bold">
            Lista completa de Bancos
          </Text>

          <Table fixedHeader heightOffset={300}>
            <thead>
              <TableRow isFixed>
                <TableHeaderCell>Código</TableHeaderCell>
                <TableHeaderCell>Nome</TableHeaderCell>
                <TableHeaderCell>Nome completo</TableHeaderCell>
              </TableRow>
            </thead>

            <tbody>
              {data.map(({ name, fullName, code, ispb }) => (
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
