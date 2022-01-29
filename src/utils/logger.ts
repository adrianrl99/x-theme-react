import { IS_DEVELOPMENT } from '~/utils/helper'

export default function Logger(key: string) {
  return {
    log: (...args: unknown[]) => {
      if (IS_DEVELOPMENT) {
        console.log(key, args)
      }
    },
    info: (...args: unknown[]) => {
      if (IS_DEVELOPMENT) {
        console.info(key, args)
      }
    },
    warn: (...args: unknown[]) => {
      if (IS_DEVELOPMENT) {
        console.warn(key, args)
      }
    },
    error: (...args: unknown[]) => {
      if (IS_DEVELOPMENT) {
        console.error(key, args)
      }
    },
  }
}
