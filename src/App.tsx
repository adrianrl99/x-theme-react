import { SectionButtons, XBase } from '~/components'
import { XThemeProvider } from '~/theme'

export default function App() {
  return (
    <XThemeProvider>
      <XBase>
        <SectionButtons />
      </XBase>
    </XThemeProvider>
  )
}
