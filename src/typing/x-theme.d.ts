import '@emotion/react'

import type { SerializedStyles } from '@emotion/serialize'
import { ReactNode } from 'react'

export type XTransitionTime = 'slow' | 'normal' | 'fast' | 'faster'

export type XThemeMixin = (args?: string) => SerializedStyles

export interface ThemeMixins {
  alignContent: XThemeMixin
  alignItems: XThemeMixin
  boxShadow: XThemeMixin
  boxSizing: XThemeMixin
  displayGrid: XThemeMixin
  fontVariantLigature: XThemeMixin
  justifyContent: XThemeMixin
  transform: XThemeMixin
  transition: XThemeMixin
}

export type XThemeColor = 'success' | 'info' | 'error' | 'warning'

export interface XThemeFunctions {
  pxToRem: (n: number) => string
  spacing: (n: number[]) => string
  shadow: (n: unknown) => string
  transition: (props: string[], time?: XTransitionTime, func?: string) => string
}

export interface XThemeFont {
  family: string
}

export interface XThemePaletteVariants {
  normal: string
  bright: string
}

export interface XThemePalette {
  background: string
  foreground: string
  black: XThemePaletteVariants
  white: XThemePaletteVariants
  red: string
  green: string
  yellow: string
  blue: string
  magenta: string
  cyan: string
}

declare module '@emotion/react' {
  export interface Theme {
    palette: XThemePalette
    mixins: ThemeMixins
    functions: XThemeFunctions
    font: XThemeFont
    color: Record<XThemeColor, string>
  }
}

interface XThemeProviderProps {
  children?: ReactNode
}
