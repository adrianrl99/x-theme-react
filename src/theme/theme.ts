import { Theme } from '@emotion/react'

import { functions } from './functions'
import { mixins } from './mixins'

const baseDarkPalette = {
  black: {
    normal: '#181a1f',
    bright: '#5c6370',
  },
  white: {
    normal: '#abb2bf',
    bright: '#ffffff',
  },
  red: '#e06c75',
  green: '#98c379',
  yellow: '#d19a66',
  blue: '#61afef',
  magenta: '#c678dd',
  cyan: '#56b6c2',
}

export const darkTheme: Theme = {
  palette: {
    ...baseDarkPalette,
    background: baseDarkPalette.black.normal,
    foreground: baseDarkPalette.white.normal,
  },
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

export const lightTheme: Theme = darkTheme
