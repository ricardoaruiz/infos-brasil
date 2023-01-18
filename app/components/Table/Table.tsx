import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableProps = ComponentProps<'table'>

export const Table = ({ children, className, ...props }: TableProps) => {
  return (
    <table
      className={cx(
        `
          border-collapse
          border-spacing-0
          table-auto
          w-full
        `,
        className
      )}
      {...props}
    >
      {children}
    </table>
  )
}
