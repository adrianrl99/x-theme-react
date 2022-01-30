import { ReactNode } from 'react'

import { XButtonProps } from './x-button'
import { XListProps } from './x-list'
import { XMenuItemProps } from './x-menu-item'

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
