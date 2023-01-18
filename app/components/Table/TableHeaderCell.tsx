import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableHeaderCelProps = ComponentProps<'th'>

export const TableHeaderCell = ({
  children,
  className,
  ...props
}: TableHeaderCelProps) => {
  return (
    <th
      className={cx(
        `
          border-2
          border-red-200
          bg-red-400
          text-white
          font-bold
          p-2
        `,
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}
