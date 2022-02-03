import { Property } from 'csstype'

import type { Direction } from './types'

export interface XListProps {
  gap?: number
  direction?: Direction
  justifyContent?: Property.JustifyContent
}
