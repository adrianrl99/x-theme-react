import '~/assets/fonts.css'

import { Global, ThemeProvider as Provider } from '@emotion/react'
import { useState } from 'react'

import reset from '~/theme/reset'
import { darkTheme, lightTheme } from '~/theme/theme'
import { XThemeProviderProps } from '~/typing/x-theme'

export default function XThemeProvider({ children }: XThemeProviderProps) {
  const [dark, setDark] = useState(false)

  return (
    <Provider theme={dark ? darkTheme : lightTheme}>
      <Global styles={reset} />
      {children}
    </Provider>
  )
}
