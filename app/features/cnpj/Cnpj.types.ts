import type { PropsWithChildren } from 'react'

import type { ApiNs } from '~/types'

export type CNPJ = {
  cnpj: string
  email: string
  identificador_matriz_filial: number
  descricao_matriz_filial: string
  razao_social: string
  nome_fantasia: string
  situacao_cadastral: number
  descricao_situacao_cadastral: string
  data_situacao_cadastral: string
  motivo_situacao_cadastral: number
  nome_cidade_exterior: string
  codigo_natureza_juridica: number
  data_inicio_atividade: string
  cnae_fiscal: number
  cnae_fiscal_descricao: string
  descricao_tipo_logradouro: string
  logradouro: string
  numero: string
  complemento: string
  bairro: string
  cep: number
  uf: string
  codigo_municipio: number
  municipio: string
  ddd_telefone_1: string
  ddd_telefone_2: string
  ddd_fax: string
  qualificacao_do_responsavel: number
  capital_social: number
  porte: number
  descricao_porte: string
  opcao_pelo_simples: boolean
  data_opcao_pelo_simples: string
  data_exclusao_do_simples: string
  opcao_pelo_mei: boolean
  situacao_especial: string
  data_situacao_especial: string
  cnaes_secundarios: CnaesSecundario[]
  qsa: Qsa[]
}

export type CnaesSecundario = {
  codigo: number
  descricao: string
}

export type Qsa = {
  identificador_de_socio: number
  nome_socio: string
  cnpj_cpf_do_socio: string
  codigo_qualificacao_socio: number
  percentual_capital_social: number
  data_entrada_sociedade: string
  cpf_representante_legal: string
  nome_representante_legal: string
  codigo_qualificacao_representante_legal: string
}

/**
 * CnpjDetailNs
 */
export namespace CnpjDetailNs {
  export type CnpjDetailProps = PropsWithChildren & {
    data: CNPJ | null | undefined
  }

  export type LoaderData = {
    data: CNPJ | null | undefined
    error: ApiNs.ResponseError | null | undefined
  }
}
