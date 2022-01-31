export const STORAGE_KEYS = {
  THEME: 'theme',
}

const Storage = () => {
  const storage = localStorage

  const key = (index: number) => storage.key(index)
  const getItem = (key: string) => {
    const item = storage.getItem(key)
    try {
      return JSON.parse(item || '')
    } catch (_) {
      return item
    }
  }
  const setItem = (key: string, value: unknown) =>
    storage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    )
  const removeItem = (key: string) => storage.removeItem(key)
  const clear = () => storage.clear()

  return {
    key,
    getItem,
    setItem,
    removeItem,
    clear,
  }
}

const storage = Storage()

export default storage
