import '~/utils/i18n'

import { Suspense } from 'react'

import {
  SectionButtons,
  SectionMenus,
  XBase,
  XCenter,
  XLanguageMenu,
  XList,
  XThemeSwitcher,
} from '~/components'
import { XThemeProvider } from '~/theme'

const App = () => (
  <XThemeProvider>
    <XBase>
      <Suspense fallback="loading">
        <XCenter>
          <XList gap={10} direction="column">
            <XList gap={10}>
              <XLanguageMenu />
              <XThemeSwitcher />
            </XList>
            <XList gap={10} direction="column">
              <SectionButtons />
              <SectionMenus />
            </XList>
          </XList>
        </XCenter>
      </Suspense>
    </XBase>
  </XThemeProvider>
)

export default App
