export default function Logger(key: string) {
  return {
    log: (...args: unknown[]) => console.log(key, args),
    info: (...args: unknown[]) => console.info(key, args),
    warn: (...args: unknown[]) => console.warn(key, args),
    error: (...args: unknown[]) => console.error(key, args),
  }
}
