export type Languages = {
  [key: string]: string
}
export type Config = {
  languages: Languages
}

export type Direction = 'column' | 'row'
export type IconPosition = 'left' | 'right'
export type InputValue = string | ReadonlyArray<string> | number | undefined
