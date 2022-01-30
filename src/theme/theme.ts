import { Theme } from '@emotion/react'

import { XThemePalette } from '~/typing'

import { functions } from './functions'
import { mixins } from './mixins'

const baseDarkPalette: XThemePalette = {
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

export const baseTheme: Theme = {
  palette: baseDarkPalette,
  mixins,
  functions,
  font: {
    family: `'JetBrainsMono', sans-serif`,
  },
  color: {
    success: baseDarkPalette.green,
    info: baseDarkPalette.blue,
    warning: baseDarkPalette.yellow,
    error: baseDarkPalette.red,
  },
}

export const darkTheme: Theme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: baseDarkPalette.black.normal,
    foreground: baseDarkPalette.white.normal,
  },
}

export const lightTheme: Theme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: baseDarkPalette.white.bright,
    foreground: baseDarkPalette.black.normal,
  },
}
