import '~/utils/i18n'

import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { XBase } from '~/components'
import AppRoutes from '~/Routes'
import { XThemeProvider } from '~/theme'

const App = () => (
  <BrowserRouter>
    <XThemeProvider>
      <XBase>
        <Suspense fallback="loading">
          <AppRoutes />
        </Suspense>
      </XBase>
    </XThemeProvider>
  </BrowserRouter>
)

export default App
