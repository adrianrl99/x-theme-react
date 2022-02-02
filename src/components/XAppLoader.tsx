import styled from '@emotion/styled'

const AppLoader = styled.div`
  ${props => props.theme.mixins.displayFlex()}
  ${props => props.theme.mixins.justifyContent('center')}
  ${props => props.theme.mixins.alignItems('center')}
  
  width: 100%;
  height: 100%;
`

const XAppLoader = () => <AppLoader>loading</AppLoader>

export default XAppLoader
