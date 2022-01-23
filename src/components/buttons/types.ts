import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonColor = 'success' | 'info' | 'error'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ButtonColor
}
