import styled from '@emotion/styled'

import { XButtonProps } from '~/typing'

const XButton = styled.button<XButtonProps>`
  background-color: ${props =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.palette.white.normal};
  color: ${props => props.theme.palette.white.contrastText};

  cursor: pointer;
  padding: ${props => props.theme.functions.spacing([2, 5])};
  border-radius: ${props => props.theme.functions.spacing([2])};
  font-size: ${props => props.theme.functions.spacing([4])};
  text-transform: uppercase;
  text-align: center;

  ${props => props.theme.mixins.boxShadow(props.theme.functions.shadow(0))}
  ${props =>
    props.theme.mixins.transition(
      props.theme.functions.transition(['transform'], 'fast'),
    )}
  position: relative;

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
    ${props => props.theme.mixins.transform('scale(1.08)')}
    &:before {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  &:active {
    ${props =>
      props.theme.mixins.transition(
        props.theme.functions.transition(['transform'], 'faster'),
      )}
    ${props => props.theme.mixins.transform('scale(0.95)')}
  }
`

export default XButton
