import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableDataCellDetailValueProps = ComponentProps<'td'>

export const TableDataCellDetailValue = ({
  children,
  className,
  ...props
}: TableDataCellDetailValueProps) => {
  return (
    <td
      className={cx(
        `
        border-2 border-red-200 font-bold p-2
        `,
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}
