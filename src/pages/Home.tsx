import {
  SectionButtons,
  SectionMenus,
  SectionSwitches,
  XCenter,
  XLanguageMenu,
  XList,
  XThemeSwitcher,
} from '~/components'

const HomePage = () => (
  <XCenter>
    <XList gap={10} direction="column">
      <XList gap={10}>
        <XLanguageMenu />
        <XThemeSwitcher />
      </XList>
      <XList gap={10} direction="column">
        <SectionButtons />
        <SectionMenus />
        <SectionSwitches />
      </XList>
    </XList>
  </XCenter>
)

export default HomePage
