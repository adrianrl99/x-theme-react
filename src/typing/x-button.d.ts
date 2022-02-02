import type { XThemeColor } from './x-theme'

export type XButtonVariant = 'text' | 'outline' | 'fill'

export interface XButtonProps {
  color?: XThemeColor
  onClick?: () => void
}
