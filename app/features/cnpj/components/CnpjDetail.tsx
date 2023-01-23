import { useNavigate } from '@remix-run/react'

import {
  Table,
  TableDataCellDetailTitle,
  TableDataCellDetailValue,
  TableRow,
  Text,
} from '~/components'

import type { CnpjDetailNs } from '../Cnpj.types'

export const CnpjDetail = ({
  data,
  children,
}: CnpjDetailNs.CnpjDetailProps) => {
  const navigate = useNavigate()

  return (
    <>
      <p
        role="link"
        onClick={() => navigate('/cnpj')}
        className="
              inline-block
              mt-5
              font-bold
              hover:text-red-400
              cursor-pointer
              mb-4
            "
      >
        Limpar
      </p>

      {!data && children}

      {data && (
        <div className="overflow-y-auto max-h-[calc(100vh-280px)]">
          <Text as="h2" className="text-center text-2xl font-bold">
            Informações gerais
          </Text>
          <Table className="mt-5">
            <tbody>
              <TableRow>
                <TableDataCellDetailTitle>CNPJ</TableDataCellDetailTitle>
                <TableDataCellDetailValue>{data.cnpj}</TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>
                  Razão Social
                </TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.razao_social}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>
                  Nome Fantasia
                </TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.nome_fantasia}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>CNAE</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {`${data.cnae_fiscal} - ${data.cnae_fiscal_descricao}`}
                </TableDataCellDetailValue>
              </TableRow>
            </tbody>
          </Table>

          <Text as="h2" className="text-center text-2xl font-bold mt-5">
            Endereço
          </Text>
          <Table className="mt-5">
            <tbody>
              <TableRow>
                <TableDataCellDetailTitle>Logradouro</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {`${data.logradouro} ${data.numero}`}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Bairro</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.bairro}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Cidade</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.municipio}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Complemento</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.complemento}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>CEP</TableDataCellDetailTitle>
                <TableDataCellDetailValue>{data.cep}</TableDataCellDetailValue>
              </TableRow>
            </tbody>
          </Table>

          <Text as="h2" className="text-center text-2xl font-bold mt-5">
            Contatos
          </Text>
          <Table className="mt-5">
            <tbody>
              <TableRow>
                <TableDataCellDetailTitle>Telefone 1</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.ddd_telefone_1}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>Telefone 2</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.ddd_telefone_2}
                </TableDataCellDetailValue>
              </TableRow>
              <TableRow>
                <TableDataCellDetailTitle>E-mail</TableDataCellDetailTitle>
                <TableDataCellDetailValue>
                  {data.email}
                </TableDataCellDetailValue>
              </TableRow>
            </tbody>
          </Table>

          <Text as="h2" className="text-center text-2xl font-bold mt-5">
            CNAES Secundários
          </Text>
          <Table className="mt-5">
            <tbody>
              {data.cnaes_secundarios.map(({ codigo, descricao }) => (
                <TableRow key={codigo}>
                  <TableDataCellDetailTitle>{codigo}</TableDataCellDetailTitle>
                  <TableDataCellDetailValue>
                    {descricao}
                  </TableDataCellDetailValue>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  )
}
