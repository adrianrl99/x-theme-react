import type { XThemeColor, XThemeSize } from './x-theme'

export type XButtonVariant = 'text' | 'outline' | 'fill'

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
  size?: XThemeSize
}
