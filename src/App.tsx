import '~/utils/i18n'

import { Suspense } from 'react'

import {
  SectionButtons,
  SectionMenus,
  XBase,
  XCenter,
  XLanguageMenu,
  XList,
} from '~/components'
import { XThemeProvider } from '~/theme'

const App = () => (
  <XThemeProvider>
    <XBase>
      <Suspense fallback="loading">
        <XCenter>
          <XList gap={10} direction="column">
            <XLanguageMenu />
            <SectionButtons />
            <SectionMenus />
          </XList>
        </XCenter>
      </Suspense>
    </XBase>
  </XThemeProvider>
)

export default App
