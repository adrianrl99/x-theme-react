import { ButtonProps } from './types'

export default function Button(props: ButtonProps) {
  const { color } = props

  props = Object.fromEntries(
    Object.entries(props).filter(([key]) => key !== 'color'),
  )

  return <button type={'button'} className={props.className} {...props} />
}
