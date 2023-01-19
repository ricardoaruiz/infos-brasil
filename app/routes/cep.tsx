import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet, useParams } from '@remix-run/react'

import { Card, SimpleSearchForm } from '~/components'

import { Text } from '../components/Text'

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const search = formData.get('search')
  return redirect(`/cep/${search}`)
}

const CEPIndex = () => {
  const params = useParams()
  const { cep } = params

  return (
    <>
      <Text as="h1" className="text-center text-4xl mb-2">
        CNPJ
      </Text>

      <Card>
        <Text as="h2" className="text-center text-2xl font-bold">
          Busca
        </Text>

        <SimpleSearchForm
          searchFieldName="search"
          searchValue={cep}
          searchFieldMaxLength={8}
          placeholder="Informe o CEP"
        />
      </Card>

      <Outlet />
    </>
  )
}

export default CEPIndex
