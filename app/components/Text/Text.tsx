import type { ComponentProps, ElementType, PropsWithChildren } from 'react'

type AsProp<C extends ElementType> = {
  as?: C
}

type PageTitleProps<C extends ElementType> = PropsWithChildren<
  AsProp<C> & ComponentProps<C>
>

export const Text = <C extends ElementType>({
  children,
  as,
  ...props
}: PageTitleProps<C>) => {
  const Component = as || 'div'

  return <Component {...props}>{children}</Component>
}
