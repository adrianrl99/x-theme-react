import { Theme } from '@emotion/react'

import { baseColorPalette, baseDarkPalette } from './base'
import XThemeComponentsConfig from './components'
import { functions } from './functions'
import { mixins } from './mixins'

export const baseTheme: Theme = {
  palette: baseDarkPalette,
  mode: 'dark',
  changeMode: () => {
    /* empty */
  },
  mixins,
  functions,
  font: {
    family: `'JetBrainsMono', sans-serif`,
  },
  color: baseColorPalette,
  size: {
    small: 7,
    normal: 8,
    large: 9,
  },
  components: XThemeComponentsConfig,
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
  mode: 'light',
  palette: {
    ...baseTheme.palette,
    background: baseDarkPalette.white.bright,
    foreground: baseDarkPalette.black.normal,
  },
}
