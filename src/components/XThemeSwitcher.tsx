import { useTheme } from '@emotion/react'
import { ChangeEvent, useMemo } from 'react'

import { XSwitch } from '~/components'

const XThemeSwitcher = () => {
  const theme = useTheme()

  const checked = useMemo(() => theme.mode === 'dark', [theme.mode])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    theme.changeMode(event.target.checked ? 'dark' : 'light')

  return <XSwitch checked={checked} onChange={handleChange} />
}

export default XThemeSwitcher
