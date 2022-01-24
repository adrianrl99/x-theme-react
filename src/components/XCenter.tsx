import styled from '@emotion/styled'

const XCenter = styled.div`
  ${props => props.theme.mixins.displayGrid()}
  ${props => props.theme.mixins.justifyContent('center')}
  ${props => props.theme.mixins.alignContent('center')}
  ${props => props.theme.mixins.alignItems('center')}

  height: 100%;
  width: 100%;
`

export default XCenter
