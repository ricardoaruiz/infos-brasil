import type { ErrorBoundaryComponent, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { ErrorHandler, NoDataFound, Text } from '~/components'
import { type CnpjTypes, CnpjApi, CnpjDetail } from '~/features/cnpj'

/**
 * Loader function
 * @param param0
 * @returns page info
 */
export const loader: LoaderFunction = async ({ params }) => {
  const { cnpj } = params
  const cnpjData = cnpj ? await CnpjApi.getCNPJ(cnpj) : null

  if (cnpjData?.error) {
    throw new Error(cnpjData.error.message)
  }

  return cnpjData
}

/**
 * View
 * @returns JSX
 */
export default function () {
  const { data } = useLoaderData<CnpjTypes.CnpjDetailNs.LoaderData>()

  return (
    <CnpjDetail data={data}>
      <NoDataFound />
    </CnpjDetail>
  )
}

/**
 * Handle error from this route
 * @param param0
 * @returns Error component to render
 */
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorHandler error={error}>
    <Text as="p">Erro no index do cnpj raiz</Text>
  </ErrorHandler>
)
