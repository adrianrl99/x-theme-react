import { ReactNode } from 'react'

import type { XButtonProps } from './x-button'
import type { XListProps } from './x-list'
import type { XMenuItemProps } from './x-menu-item'

export interface XMenuProps {
  buttonContent?: ReactNode
  buttonProps?: XButtonProps
  listProps?: XListProps
  items?: XMenuItemProps[]
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
  backdrop?: boolean
}
