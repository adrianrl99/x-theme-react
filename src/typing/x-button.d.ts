import type { XThemeColor } from './x-theme'

export type XButtonVariant = 'text' | 'outline' | 'fill'
export type XButtonSize = 'small' | 'normal' | 'large'

export interface XButtonAnimation {
  onHover?: boolean
  onActive?: boolean
}

export interface XButtonThemeProps {
  animation?: XButtonAnimation
}

export interface XButtonProps extends XButtonThemeProps {
  onClick?: () => void
  color?: XThemeColor
  variant?: XButtonVariant
  size?: XButtonSize
}
