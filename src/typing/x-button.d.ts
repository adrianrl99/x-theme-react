import type { XThemeColor, XThemeSize, XThemeTransition } from './x-theme'

export type XButtonVariant = 'text' | 'outline' | 'fill'

export interface XButtonAnimation {
  onHover?: boolean
  onActive?: boolean
}

export type XButtonThemeSize = {
  [key in XThemeSize]: {
    fontSize: number
    padding: number[]
    height: number
  }
}

export interface XButtonThemeTransform {
  onHover: string
  onActive: string
}

export interface XButtonThemeProps {
  animation: XButtonAnimation
  borderRadius: number
  color: Record<XThemeColor | 'base' | 'contrastText', string>
  shadow: string
  size: XButtonThemeSize
  transform: XButtonThemeTransform
  transition: XThemeTransition
}

export interface XButtonProps {
  onClick?: () => void
  color?: XThemeColor
  variant?: XButtonVariant
  animation?: XButtonAnimation
  size?: XThemeSize
}
