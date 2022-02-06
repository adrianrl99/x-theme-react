import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { XButtonProps } from '~/typing'

const XButton = styled.button<XButtonProps>`
  cursor: pointer;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  ${props => css`
    ${props.theme.mixins.alignItems('center')};
    ${props.theme.mixins.displayFlex()};
    ${props.theme.mixins.justifyContent('center')};

    border-radius: ${props.theme.functions.spacing([2])};
  `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${props => css`
      ${props.theme.mixins.transition(
        props.theme.functions.transition(['background-color'], 'fast'),
      )};

      border-radius: ${props.theme.functions.spacing([2])};
    `}
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.15);
  }

  height: ${props =>
    props.theme.functions.spacing([props.theme.size[props.size || 'normal']])};

  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: ${props.theme.functions.spacing([3.5])};
          padding: ${props.theme.functions.spacing([1.5, 4])};
        `
      case 'large':
        return css`
          font-size: ${props.theme.functions.spacing([5])};
          padding: ${props.theme.functions.spacing([2.5, 6])};
        `
      default:
        return css`
          font-size: ${props.theme.functions.spacing([4])};
          padding: ${props.theme.functions.spacing([2, 5])};
        `
    }
  }}

  ${props => {
    switch (props.variant) {
      case 'text':
        return css`
          color: ${props.color
            ? props.theme.color[props.color]
            : props.theme.palette.white.normal};
          background-color: transparent;
        `
      case 'outline':
        return css`
          color: ${props.color
            ? props.theme.color[props.color]
            : props.theme.palette.white.normal};
          background-color: transparent;

          &:before {
            border: 1px solid
              ${props.color
                ? props.theme.color[props.color]
                : props.theme.palette.white.normal};
          }
        `
      default:
        return css`
          color: ${props.theme.palette.white.contrastText};
          background-color: ${props.color
            ? props.theme.color[props.color]
            : props.theme.palette.white.normal};

          ${props.theme.mixins.boxShadow(props.theme.functions.shadow(0))}

          ${((props.animation?.onHover ??
            props.theme.components?.XButton?.animation?.onHover) ||
            (props.animation?.onActive ??
              props.theme.components?.XButton?.animation?.onActive)) &&
          css`
            ${props.theme.mixins.transition(
              props.theme.functions.transition(['transform'], 'fast'),
            )}

            &:active {
              ${props.theme.mixins.transition(
                props.theme.functions.transition(['transform'], 'faster'),
              )}
            }
          `}

          ${(props.animation?.onHover ??
            props.theme.components?.XButton?.animation?.onHover) &&
          css`
            &:hover {
              ${props.theme.mixins.transform('scale(1.08)')}
            }
          `}

          ${(props.animation?.onActive ??
            props.theme.components?.XButton?.animation?.onActive) &&
          css`
            &:active {
              ${props.theme.mixins.transform('scale(0.95)')}
            }
          `}
        `
    }
  }}
`

export default XButton
