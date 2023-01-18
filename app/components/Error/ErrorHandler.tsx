import type { ComponentProps, PropsWithChildren } from 'react'

import type { ErrorBoundaryComponent } from '@remix-run/node'

type HandleErrorProps = PropsWithChildren<
  ComponentProps<ErrorBoundaryComponent>
>

export const ErrorHandler = ({ error, children }: HandleErrorProps) => {
  return (
    <>
      <h1>Deu erro aqui</h1>
      <p>{error.name}</p>
      <p>{error.message}</p>
      {children}
    </>
  )
}
