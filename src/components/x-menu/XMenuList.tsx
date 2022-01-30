import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { XMenuListProps } from '~/typing/x-menu-list'

const XMenuList = styled.div<XMenuListProps>`
  overflow: hidden;
  position: absolute;
  z-index: 1;

  top: calc(
    ${props => props.top || 0}px +
      ${props => props.theme.functions.spacing([2])}
  );
  border-radius: ${props => props.theme.functions.spacing([2])};

  ${props =>
    !props.open &&
    css`
      display: none;
    `}
  ${props => props.theme.mixins.boxShadow(props.theme.functions.shadow(0))};
`

export default XMenuList
