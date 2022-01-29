import { ReactNode } from 'react'

import { XButtonProps } from './x-button'
import { XListProps } from './x-list'

export interface XMenuProps {
  buttonContent?: ReactNode
  buttonProps?: XButtonProps
  listContent?: XListProps[]
  listProps?: XListProps
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
  backdrop?: boolean
}
