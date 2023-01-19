import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableProps = ComponentProps<'table'> & {
  fixedHeader?: boolean
  heightOffset?: number
}

export const Table = ({
  children,
  fixedHeader = false,
  heightOffset = 0,
  className,
  ...props
}: TableProps) => {
  return (
    <div
      className={cx(fixedHeader && `overflow-y-auto`)}
      style={{ maxHeight: `calc(100vh - ${heightOffset}px)` }}
    >
      <table
        className={cx(
          `
            border-collapse
            border-spacing-0
            table-fixed
            w-full
          `,
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}
