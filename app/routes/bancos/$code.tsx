import type { ErrorBoundaryComponent, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { ErrorHandler, NoDataFound, Text } from '~/components'
import { type BankTypes, BankDetail, BanksApi } from '~/features/banks'

export const loader: LoaderFunction = async ({ params }) => {
  const { code } = params

  if (!code || code === 'null') {
    return redirect('/bancos')
  }

  const bankData = await BanksApi.getBank(code)

  return bankData
}

export default function () {
  const { data } = useLoaderData<BankTypes.BankDetailNs.LoaderData>()

  if (!data) {
    return <NoDataFound />
  }
  return <BankDetail data={data} />
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
