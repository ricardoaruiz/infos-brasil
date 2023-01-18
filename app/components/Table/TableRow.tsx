import cx from 'classnames'
import type { ComponentProps } from 'react'

type TableRowProps = ComponentProps<'tr'> & {
  isHoverEffect?: boolean
}

export const TableRow = ({
  children,
  className,
  isHoverEffect,
  ...props
}: TableRowProps) => (
  <tr
    className={cx(
      `
      ${
        isHoverEffect &&
        `
        hover:bg-red-400
        hover:cursor-pointer
        font-semibold
        hover:text-white
      `
      }
    `,
      className
    )}
    {...props}
  >
    {children}
  </tr>
)
