import type { ChangeEventHandler } from 'react'

import type { XThemeColor, XThemeSize } from '~/typing'

export interface XSwitchLabelProps {
  size?: XThemeSize
}

export interface XSwitchProps {
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  color?: XThemeColor
  size?: XThemeSize
}
