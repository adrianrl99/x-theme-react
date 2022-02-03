import '@emotion/react'

import type { SerializedStyles } from '@emotion/serialize'

import { XButtonThemeProps } from '~/typing/x-button'

export type XThemeMode = 'dark' | 'light'

export type XTransitionTime = 'slow' | 'normal' | 'fast' | 'faster'

export type XThemeMixin = (args?: string) => SerializedStyles

export interface ThemeMixins {
  alignContent: XThemeMixin
  alignItems: XThemeMixin
  boxShadow: XThemeMixin
  boxSizing: XThemeMixin
  displayFlex: XThemeMixin
  displayGrid: XThemeMixin
  flexDirection: XThemeMixin
  fontVariantLigature: XThemeMixin
  justifyContent: XThemeMixin
  transform: XThemeMixin
  transition: XThemeMixin
  transitionProperty: XThemeMixin
}

export type XThemeColor = 'success' | 'info' | 'error' | 'warning'
export type XThemeSize = 'small' | 'normal' | 'large'

export interface XThemeFunctions {
  pxToRem: (n: number) => string
  spacing: (n: number[]) => string
  shadow: (n: number, inset?: boolean) => string
  transition: (props: string[], time?: XTransitionTime, func?: string) => string
}

export interface XThemeFont {
  family: string
}

export interface XThemePaletteVariants {
  normal: string
  bright: string
  contrastText: string
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

export interface XThemeComponentes {
  XButton?: XButtonThemeProps
}

declare module '@emotion/react' {
  export interface Theme {
    mode: XThemeMode
    changeMode: (mode: XThemeMode) => void
    palette: XThemePalette
    mixins: ThemeMixins
    functions: XThemeFunctions
    font: XThemeFont
    color: Record<XThemeColor, string>
    size: Record<XThemeSize, number>
    components?: XThemeComponentes
  }
}
