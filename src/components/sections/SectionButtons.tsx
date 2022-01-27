import { Trans } from 'react-i18next'

import { XButton, XCenter, XGap } from '~/components'

export default function SectionButtons() {
  return (
    <XCenter>
      <XGap all={2}>
        <XButton>
          <Trans i18nKey="button">button</Trans>
        </XButton>
        <XButton color="success">
          <Trans i18nKey="button">button</Trans>
        </XButton>
        <XButton color="error">
          <Trans i18nKey="button">button</Trans>
        </XButton>
        <XButton color="info">
          <Trans i18nKey="button">button</Trans>
        </XButton>
        <XButton color="warning">
          <Trans i18nKey="button">button</Trans>
        </XButton>
      </XGap>
    </XCenter>
  )
}
