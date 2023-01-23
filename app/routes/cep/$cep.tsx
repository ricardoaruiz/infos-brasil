import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { ErrorHandler, NoDataFound, Text } from '~/components'
import { type CepTypes, CepApi, CepDetail } from '~/features/cep'

export const loader: LoaderFunction = async ({ params }) => {
  const { cep } = params
  const cepData = cep ? await CepApi.getCEP(cep) : null
  return cepData
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const search = form.get('search')
  return redirect(`/cep${search ? `?search=${search}` : ''}`)
}

const CEPIndex = () => {
  const { data } = useLoaderData<CepTypes.CepDetailNs.LoaderData>()

  if (!data) {
    return <NoDataFound />
  }
  return <CepDetail data={data} />
}

export default CEPIndex

/**
 * Handle error from this route
 * @param param0
 * @returns Error component to render
 */
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorHandler error={error}>
    <Text as="p">Erro no index do cep</Text>
  </ErrorHandler>
)
