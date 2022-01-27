import { I18nextProvider } from 'react-i18next'

import { SectionButtons, XBase } from '~/components'
import { XThemeProvider } from '~/theme'
import i18n from '~/utils/i18n'

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <XThemeProvider>
        <XBase>
          <SectionButtons />
        </XBase>
      </XThemeProvider>
    </I18nextProvider>
  )
}
