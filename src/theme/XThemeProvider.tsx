import '~/assets/fonts.css'

import { Global, Theme, ThemeProvider as Provider } from '@emotion/react'
import type { PropsWithChildren, ReactNode } from 'react'
import { useLayoutEffect, useMemo, useState } from 'react'

import type { XThemeMode } from '~/typing'
import storage, { STORAGE_KEYS } from '~/utils/storage'

import reset from './reset'
import { darkTheme, lightTheme } from './theme'

const XThemeProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const [mode, setMode] = useState<XThemeMode>('light')

  const changeMode = (mode: XThemeMode) => {
    storage.setItem(STORAGE_KEYS.THEME, mode)
    setMode(mode)
  }

  const theme: Theme = useMemo(
    () => ({ ...(mode === 'dark' ? darkTheme : lightTheme), mode, changeMode }),
    [mode],
  )

  const initTheme = () => {
    const storeTheme = storage.getItem(STORAGE_KEYS.THEME)

    if (storeTheme === 'dark' || storeTheme === 'light') {
      setMode(storeTheme)
    } else {
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setMode(dark ? 'dark' : 'light')
    }
  }

  useLayoutEffect(() => {
    initTheme()
  }, [])

  return (
    <Provider theme={theme}>
      <Global styles={reset} />
      {children}
    </Provider>
  )
}

export default XThemeProvider
