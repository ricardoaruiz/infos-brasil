import { NavLink } from '@remix-run/react'

import { styled } from '~/config/stitches.config'

export const MenuItem = styled(NavLink, {
  display: 'inline-block',
  width: '100%',
  padding: '8px',
  borderRadius: '$rounded',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$slate900',
  marginTop: '4px',

  '&:hover': {
    backgroundColor: '$red300',
    color: '$slate100',
  },
  '&.active': {
    backgroundColor: '$red400',
    boxShadow: '$lg',
  },
  '&.pending': {
    true: {
      backgroundColor: '$red200',
      color: '$red900',
    },
  },
})
