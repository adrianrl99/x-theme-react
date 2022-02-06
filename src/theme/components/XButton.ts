import { baseColorPalette, baseDarkPalette } from '~/theme/base'
import { functions } from '~/theme/functions'
import { XButtonThemeProps } from '~/typing'

const XButtonThemeConfig: XButtonThemeProps = {
  animation: {
    onHover: true,
    onActive: true,
  },
  borderRadius: 2,
  color: {
    base: baseDarkPalette.white.normal,
    contrastText: baseDarkPalette.white.contrastText,
    success: baseColorPalette.success,
    info: baseColorPalette.info,
    warning: baseColorPalette.warning,
    error: baseColorPalette.error,
  },
  shadow: functions.shadow(0),
  size: {
    small: {
      fontSize: 3.5,
      padding: [1.5, 4],
      height: 7,
    },
    normal: {
      fontSize: 4,
      padding: [2, 5],
      height: 8,
    },
    large: {
      fontSize: 5,
      padding: [2.5, 6],
      height: 9,
    },
  },
  transform: {
    onHover: 'scale(1.08)',
    onActive: 'scale(0.95)',
  },
  transition: {
    base: {
      speed: 'fast',
      properties: ['transform'],
    },
    onActive: {
      speed: 'faster',
      properties: ['transform'],
    },
  },
}

export default XButtonThemeConfig
