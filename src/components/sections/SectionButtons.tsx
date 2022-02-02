import { useTranslation } from 'react-i18next'

import { XButton, XCenter, XList } from '~/components'

const SectionButtons = () => {
  const { t } = useTranslation()

  return (
    <XCenter>
      <XList gap={3} direction="column">
        <XList gap={2} direction="row">
          <XButton size="small">{t('button')}</XButton>
          <XButton size="small" color="success">
            {t('button')}
          </XButton>
          <XButton size="small" color="error">
            {t('button')}
          </XButton>
          <XButton size="small" color="info">
            {t('button')}
          </XButton>
          <XButton size="small" color="warning">
            {t('button')}
          </XButton>
        </XList>
        <XList gap={2} direction="row">
          <XButton>{t('button')}</XButton>
          <XButton color="success">{t('button')}</XButton>
          <XButton color="error">{t('button')}</XButton>
          <XButton color="info">{t('button')}</XButton>
          <XButton color="warning">{t('button')}</XButton>
        </XList>
        <XList gap={2} direction="row">
          <XButton size="large">{t('button')}</XButton>
          <XButton size="large" color="success">
            {t('button')}
          </XButton>
          <XButton size="large" color="error">
            {t('button')}
          </XButton>
          <XButton size="large" color="info">
            {t('button')}
          </XButton>
          <XButton size="large" color="warning">
            {t('button')}
          </XButton>
        </XList>
        <XList gap={2} direction="row">
          <XButton variant="text">{t('button')}</XButton>
          <XButton variant="text" color="success">
            {t('button')}
          </XButton>
          <XButton variant="text" color="error">
            {t('button')}
          </XButton>
          <XButton variant="text" color="info">
            {t('button')}
          </XButton>
          <XButton variant="text" color="warning">
            {t('button')}
          </XButton>
        </XList>
        <XList gap={2} direction="row">
          <XButton variant="outline">{t('button')}</XButton>
          <XButton variant="outline" color="success">
            {t('button')}
          </XButton>
          <XButton variant="outline" color="error">
            {t('button')}
          </XButton>
          <XButton variant="outline" color="info">
            {t('button')}
          </XButton>
          <XButton variant="outline" color="warning">
            {t('button')}
          </XButton>
        </XList>
      </XList>
    </XCenter>
  )
}

export default SectionButtons
