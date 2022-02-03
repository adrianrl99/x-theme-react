import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { XListProps } from '~/typing'

const XList = styled.div<XListProps>`
  ${props => css`
    ${props.theme.mixins.displayFlex()};
    ${props.theme.mixins.flexDirection(props.direction || 'row')};
    ${props.theme.mixins.justifyContent(props.justifyContent || 'normal')};

    gap: ${props.theme.functions.spacing([props.gap || 0])};
  `}
`

export default XList
