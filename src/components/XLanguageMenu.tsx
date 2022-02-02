import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { XMenu } from '~/components'
import CONFIG from '~/utils/config'

const XLanguageMenu = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <XMenu
      buttonProps={{
        onClick: handleMenu,
      }}
      buttonContent={CONFIG.languages[i18n.language]}
      open={open}
      items={Object.entries(CONFIG.languages)
        .filter(([key]) => key !== i18n.language)
        .map(([key, content]) => ({
          key,
          content,
          onClick: async () => {
            await i18n.changeLanguage(key)
            handleClose()
          },
        }))}
    />
  )
}

export default XLanguageMenu
