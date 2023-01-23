import type { ApiNs } from '~/types'

export type CEP = {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
}

export namespace CepDetailNs {
  export type CepDetailProps = {
    data: CEP
  }

  export type LoaderData = {
    data: CEP | null
    error: ApiNs.ResponseError | null | undefined
  }
}
