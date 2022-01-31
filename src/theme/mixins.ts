import { css } from '@emotion/react'

import type { ThemeMixins } from '~/typing'

export const mixins: ThemeMixins = {
  alignContent: args => css`
    -ms-flex-line-pack: ${args};
    align-content: ${args};
  `,
  alignItems: args => css`
    -webkit-box-align: ${args};
    -ms-flex-align: ${args};
    align-items: ${args};
  `,
  boxShadow: args => css`
    -webkit-box-shadow: ${args};
    box-shadow: ${args};
  `,
  boxSizing: args => css`
    -webkit-box-sizing: ${args};
    box-sizing: ${args};
  `,
  displayFlex: () => css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  `,
  displayGrid: () => css`
    display: -ms-grid;
    display: grid;
  `,
  flexDirection: args => css`
    -webkit-box-orient: ${!args
      ? 'horizontal'
      : args === 'inherit' || args === 'initial' || args === 'unset'
      ? args
      : args.startsWith('row')
      ? 'horizontal'
      : args.startsWith('column') || args === 'revert'
      ? 'vertical'
      : 'horizontal'};
    -webkit-box-direction: ${!args
      ? 'normal'
      : args === 'inherit' || args === 'initial' || args === 'unset'
      ? args
      : args.endsWith('reverse')
      ? 'reverse'
      : 'normal'};
    -ms-flex-direction: ${args};
    flex-direction: ${args};
  `,
  fontVariantLigature: args => css`
    -webkit-font-variant-ligatures: ${args};
    font-variant-ligatures: ${args};
  `,
  justifyContent: args => css`
    -webkit-box-pack: ${args};
    -ms-flex-pack: ${args};
    justify-content: ${args};
  `,
  transform: args => css`
    -webkit-transform: ${args};
    -ms-transform: ${args};
    transform: ${args};
  `,
  transition: args => css`
    -webkit-transition: ${args};
    -o-transition: ${args};
    transition: ${args};
  `,
  transitionProperty: args => css`
    -webkit-transition-property: ${args};
    -o-transition-property: ${args};
    transition-property: ${args};
  `,
}
