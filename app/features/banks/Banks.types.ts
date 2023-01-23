import type { ApiNs } from '~/types'

export type Bank = {
  ispb: string
  name: string
  code: number
  fullName: string
}

export namespace BankListNs {
  export type BankListProps = {
    search: string | null
    data: Bank[]
  }

  export type LoaderData = {
    search: string | null
    data: Bank[]
    error: ApiNs.ResponseError | null | undefined
  }
}

export namespace BankDetailNs {
  export type BankDetailProps = {
    data: Bank
  }

  export type LoaderData = {
    data: Bank | null
    error: ApiNs.ResponseError | null | undefined
  }
}
