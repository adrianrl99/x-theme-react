import { useTranslation } from 'react-i18next'

import { XCenter, XList, XMenu } from '~/components'

const SectionMenus = () => {
  const { t } = useTranslation()

  return (
    <XCenter>
      <XList gap={2} direction="row">
        <XMenu buttonContent={t('menu')} />
        <XMenu buttonContent={t('menu')} buttonProps={{ color: 'success' }} />
        <XMenu buttonContent={t('menu')} buttonProps={{ color: 'error' }} />
        <XMenu buttonContent={t('menu')} buttonProps={{ color: 'info' }} />
        <XMenu buttonContent={t('menu')} buttonProps={{ color: 'warning' }} />
      </XList>
    </XCenter>
  )
}

export default SectionMenus
