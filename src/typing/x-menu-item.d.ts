import { ReactNode } from 'react'

import { IconPosition } from './types'

export interface XMenuItemProps {
  key: string
  content: ReactNode
  icon?: ReactNode
  iconPosition?: IconPosition
  href?: string
  onClick?: () => void
}
