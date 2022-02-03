import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { XSwitchLabelProps, XSwitchProps } from '~/typing'

const Label = styled.label<XSwitchLabelProps>`
  position: relative;

  ${props => css`
    height: ${props.theme.functions.spacing([
      props.theme.size[props.size || 'normal'],
    ])};
    width: ${props.theme.functions.spacing([
      props.theme.size[props.size || 'normal'] * 2,
    ])};
  `}
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
  border-radius: 2rem;

  ${props => css`
    background-color: ${props.theme.palette.white.normal};

    ${props.theme.mixins.transition(
      props.theme.functions.transition(['background-color']),
    )}
    ${props.theme.mixins.boxShadow(props.theme.functions.shadow(0, true))}
  `}

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    left: 5px;
    bottom: 5px;

    ${props => css`
      background-color: ${props.theme.palette.white.bright};
      height: calc(
        ${props.theme.functions.spacing([
            props.theme.size[props.size || 'normal'],
          ])} - 10px
      );
      width: calc(
        ${props.theme.functions.spacing([
            props.theme.size[props.size || 'normal'],
          ])} - 10px
      );

      ${props.theme.mixins.boxShadow(props.theme.functions.shadow(0))};
      ${props.theme.mixins.transition(
        props.theme.functions.transition(['transform']),
      )}
    `}
  }

  ${props =>
    props.checked &&
    css`
      background-color: ${props.color
        ? props.theme.color[props.color]
        : props.theme.palette.background};

      &:before {
        ${props.theme.mixins.transform(
          `translateX(${props.theme.functions.spacing([
            props.theme.size[props.size || 'normal'],
          ])})`,
        )}
      }
    `}
`

const XSwitch = (props: XSwitchProps) => (
  <Label size={props.size}>
    <Input type="checkbox" checked={props.checked} onChange={props.onChange} />
    <Span {...props} />
  </Label>
)

export default XSwitch
