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

    border-radius: ${props.theme.functions.spacing([
      props.theme.components.XButton.borderRadius,
    ])};

    font-size: ${props.theme.functions.spacing([
      props.theme.components.XButton.size[props.size || 'normal'].fontSize,
    ])};
    padding: ${props.theme.functions.spacing(
      props.theme.components.XButton.size[props.size || 'normal'].padding,
    )};

    height: ${props.theme.functions.spacing([
      props.theme.components.XButton.size[props.size || 'normal'].height,
    ])};
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

      border-radius: inherit;
    `}
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.15);
  }

  ${props => {
    switch (props.variant) {
      case 'text':
        return css`
          color: ${props.theme.components.XButton.color[props.color || 'base']};
          background-color: transparent;
        `
      case 'outline':
        return css`
          color: ${props.theme.components.XButton.color[props.color || 'base']};
          background-color: transparent;

          &:before {
            border: 1px solid
              ${props.theme.components.XButton.color[props.color || 'base']};
          }
        `
      default:
        return css`
          color: ${props.theme.components.XButton.color.contrastText};
          background-color: ${props.theme.components.XButton.color[
            props.color || 'base'
          ]};

          ${props.theme.mixins.boxShadow(props.theme.components.XButton.shadow)}

          ${((props.animation?.onHover ??
            props.theme.components?.XButton?.animation?.onHover) ||
            (props.animation?.onActive ??
              props.theme.components?.XButton?.animation?.onActive)) &&
          css`
            ${props.theme.mixins.transition(
              props.theme.functions.transition(
                props.theme.components.XButton.transition.base?.properties ||
                  [],
                props.theme.components.XButton.transition.base?.speed || 'fast',
              ),
            )}

            &:active {
              ${props.theme.mixins.transition(
                props.theme.functions.transition(
                  props.theme.components.XButton.transition.onActive
                    ?.properties || [],
                  props.theme.components.XButton.transition.onActive?.speed ||
                    'faster',
                ),
              )}
            }
          `}

          ${(props.animation?.onHover ??
            props.theme.components.XButton.animation.onHover) &&
          css`
            &:hover {
              ${props.theme.mixins.transform(
                props.theme.components.XButton.transform.onHover,
              )}
            }
          `}

          ${(props.animation?.onActive ??
            props.theme.components?.XButton?.animation?.onActive) &&
          css`
            &:active {
              ${props.theme.mixins.transform(
                props.theme.components.XButton.transform.onActive,
              )}
            }
          `}
        `
    }
  }}
`

export default XButton
