import type { ComponentProps } from 'react'

type TableRowDetailProps = ComponentProps<'tr'>

export const TableRowDetail = ({ children, ...props }: TableRowDetailProps) => (
  <tr {...props}>{children}</tr>
)
