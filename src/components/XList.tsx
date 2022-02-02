import styled from '@emotion/styled'

import type { XListProps } from '~/typing'

const XList = styled.div<XListProps>`
  ${props => props.theme.mixins.displayFlex()}
  ${props => props.theme.mixins.flexDirection(props.direction || 'row')}

  gap: ${props => props.theme.functions.spacing([props.gap || 0])};
`

export default XList
