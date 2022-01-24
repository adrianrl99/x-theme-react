import styled from '@emotion/styled'

const XBase = styled.div`
  background-color: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.foreground};

  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  min-width: 100vw;

  ${props => props.theme.mixins.displayGrid()}

  ${props => props.theme.mixins.boxSizing('border-box')}
  
  font-family: ${props => props.theme.font.family};
  text-rendering: optimizeLegibility;
  ${props => props.theme.mixins.fontVariantLigature('normal')}
`

export default XBase
