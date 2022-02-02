import type { XThemeFunctions } from '~/typing'
import Logger from '~/utils/logger'

const logger = Logger('/src/theme/functions.ts')

export const functions: XThemeFunctions = {
  pxToRem: n => n / 16 + 'rem',
  spacing: function (n) {
    return n.map(el => this.pxToRem(el * 4)).join(' ')
  },
  shadow: (_, inset) =>
    `${inset ? 'inset' : ''} 1px 1px 4px 1px rgba(0, 0, 0, 0.25), ${
      inset ? 'inset' : ''
    } 3px 3px 12px 3px rgba(0, 0, 0, 0.25)`,
  transition: (props, time = 'normal', func = 'ease-in-out') => {
    let result

    switch (time) {
      case 'slow':
        result = 0.4
        break
      case 'normal':
        result = 0.3
        break
      case 'fast':
        result = 0.2
        break
      case 'faster':
        result = 0.1
        break
      default:
        logger.error('[transition]', 'Incorrect time', { props, time, func })
        throw new Error('Incorrect time')
    }

    return `${props.join(',')} ${result}s ${func}`
  },
}
