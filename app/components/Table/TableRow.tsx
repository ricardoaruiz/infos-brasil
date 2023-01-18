import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableRowProps = ComponentProps<'tr'> & {
  isHoverEffect?: boolean
  isFixed?: boolean
}

export const TableRow = ({
  children,
  className,
  isHoverEffect,
  isFixed,
  ...props
}: TableRowProps) => (
  <tr
    className={cx(
      `
      ${
        isHoverEffect
          ? `
        hover:bg-red-400
        hover:cursor-pointer
        font-semibold
        hover:text-white
      `
          : ''
      }
    `,
      isFixed ? 'sticky top-0' : '',
      className
    )}
    {...props}
  >
    {children}
  </tr>
)
