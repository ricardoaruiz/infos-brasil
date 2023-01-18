import { Outlet } from '@remix-run/react'

import { Text } from '../components/Text'

const BankLayout = () => {
  return (
    <>
      <Text as="h1" className="text-center text-4xl mb-2">
        Bancos
      </Text>

      <Outlet />
    </>
  )
}

export default BankLayout
