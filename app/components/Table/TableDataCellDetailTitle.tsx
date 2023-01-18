import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableDataCelProps = ComponentProps<'td'>

export const TableDataCellDetailTitle = ({
  children,
  className,
  ...props
}: TableDataCelProps) => {
  return (
    <td
      className={cx(
        `
        border-2 border-red-200 bg-red-400 text-white font-bold p-2 w-40
        `,
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}
