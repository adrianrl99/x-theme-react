import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { XSwitchProps } from '~/typing'

const Label = styled.label`
  position: relative;
  width: 60px;
  height: 34px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Span = styled.span<XSwitchProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;

  background-color: ${props => props.theme.palette.white.normal};

  ${props =>
    props.theme.mixins.transition(
      props.theme.functions.transition(['background-color']),
    )}
  ${props =>
    props.theme.mixins.boxShadow(props.theme.functions.shadow(0, true))}

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.palette.white.bright};

    ${props => props.theme.mixins.boxShadow(props.theme.functions.shadow(0))}
    ${props =>
      props.theme.mixins.transition(
        props.theme.functions.transition(['transform']),
      )}
  }

  ${props =>
    props.checked &&
    css`
      background-color: ${props.theme.palette.blue};

      &:before {
        ${props.theme.mixins.transform('translateX(26px)')}
      }
    `}
`

const XSwitch = (props: XSwitchProps) => (
  <Label>
    <Input type="checkbox" checked={props.checked} onChange={props.onChange} />
    <Span {...props} />
  </Label>
)

export default XSwitch
