import cx from 'classnames'
import type { ComponentProps } from 'react'

type CardProps = ComponentProps<'div'>

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cx(`bg-red-300 px-10 py-5 mb-5 shadow-xl rounded`, className)}
      {...props}
    >
      {children}
    </div>
  )
}
