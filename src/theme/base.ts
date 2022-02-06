import { XThemeColor, XThemePalette } from '~/typing'

export const baseDarkPalette: XThemePalette = {
  background: '',
  foreground: '',
  black: {
    normal: '#181a1f',
    bright: '#5c6370',
    contrastText: '#abb2bf',
  },
  white: {
    normal: '#abb2bf',
    bright: '#ffffff',
    contrastText: '#181a1f',
  },
  red: '#e06c75',
  green: '#98c379',
  yellow: '#d19a66',
  blue: '#61afef',
  magenta: '#c678dd',
  cyan: '#56b6c2',
}

export const baseColorPalette: Record<XThemeColor, string> = {
  success: baseDarkPalette.green,
  info: baseDarkPalette.blue,
  warning: baseDarkPalette.yellow,
  error: baseDarkPalette.red,
}
