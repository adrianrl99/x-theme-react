import styled from '@emotion/styled'

import type { XGapProps } from '~/typing/x-gap'

const XGap = styled.div<XGapProps>`
  ${props => props.theme.mixins.displayGrid()}

  gap: ${props =>
    props.all ? props.theme.functions.spacing([props.all]) : ''};
  column-gap: ${props =>
    props.column ? props.theme.functions.spacing([props.column]) : ''};
  row-gap: ${props =>
    props.row ? props.theme.functions.spacing([props.row]) : ''};
`

export default XGap
