import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableDataCellProps = ComponentProps<'td'>

export const TableDataCel = ({
  children,
  className,
  ...props
}: TableDataCellProps) => {
  return (
    <td
      className={cx(
        `
          border-2
          border-red-200
          p-2
        `,
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}
