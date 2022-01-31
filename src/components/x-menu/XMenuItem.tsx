import styled from '@emotion/styled'

import XButton from '~/components/XButton'
import { XMenuItemProps } from '~/typing'

const MenuItem = styled.div`
  text-align: left;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-transform: none;
  height: auto;

  color: ${props => props.theme.palette.foreground};
  padding: ${props => props.theme.functions.spacing([3, 4])};

  ${props => props.theme.mixins.boxShadow('none')}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${props =>
      props.theme.mixins.transition(
        props.theme.functions.transition(['background-color'], 'fast'),
      )}
  }

  &:hover {
    ${props => props.theme.mixins.transform('none')}

    &::before {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`

const XMenuItem = (props: XMenuItemProps) => (
  <MenuItem as={props.href ? 'a' : XButton} {...props}>
    {props.content}
  </MenuItem>
)

export default XMenuItem
