import { type ComponentProps } from 'react'

import type { NavLink } from '@remix-run/react'

import * as S from './AppMenuItem.styles'

type MenuItemProp = ComponentProps<typeof NavLink>

export function AppMenuItem({
  to,
  children,
  className,
  ...props
}: MenuItemProp) {
  return (
    <li>
      <S.MenuItem to={to} {...props}>
        {children}
      </S.MenuItem>
    </li>
  )
}
