import { type ComponentProps } from 'react'
import cx from 'classnames'

import { NavLink } from '@remix-run/react'

type MenuItemProp = ComponentProps<typeof NavLink>

export function AppMenuItem({
  to,
  children,
  className,
  ...props
}: MenuItemProp) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive, isPending }) => {
          return cx(
            `
              hover:bg-red-300
              hover:text-white
              hover:shadow-sm
              inline-block
              w-full
              p-2
              rounded
              text-sm
              font-bold
              mt-1
            `,

            isActive &&
              `
              bg-red-400
              text-white
              hover:bg-red-400
              font-bold
              shadow-lg
            `,

            isPending &&
              `
            bg-red-200
            text-red-900
            `,

            `${className}`
          )
        }}
        {...props}
      >
        {children}
      </NavLink>
    </li>
  )
}
