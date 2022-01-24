import { css } from '@emotion/react'

import type { ThemeMixins } from '~/typing/x-theme'

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
  displayGrid: () => css`
    display: -ms-grid;
    display: grid;
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
}
