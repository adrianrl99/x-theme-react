import '~/assets/fonts.css'

import { Global, ThemeProvider as Provider } from '@emotion/react'
import { useState } from 'react'

import { XThemeProviderProps } from '~/typing'

import reset from './reset'
import { darkTheme, lightTheme } from './theme'

export default function XThemeProvider({ children }: XThemeProviderProps) {
  const [dark, setDark] = useState(true)

  return (
    <Provider theme={dark ? darkTheme : lightTheme}>
      <Global styles={reset} />
      {children}
    </Provider>
  )
}
