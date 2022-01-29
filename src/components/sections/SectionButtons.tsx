import { useTranslation } from 'react-i18next'

import { XButton, XCenter, XList } from '~/components'

const SectionButtons = () => {
  const { t } = useTranslation()

  return (
    <XCenter>
      <XList gap={2} direction="row">
        <XButton>{t('button')}</XButton>
        <XButton color="success">{t('button')}</XButton>
        <XButton color="error">{t('button')}</XButton>
        <XButton color="info">{t('button')}</XButton>
        <XButton color="warning">{t('button')}</XButton>
      </XList>
    </XCenter>
  )
}

export default SectionButtons
