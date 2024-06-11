import { useEffect, useState } from 'react'

export const isFalsy = (value: any) => value === 0 ? false : !value

export function cleanObject(object: Record<string, any>) {
  const newObject = { ...object }
  Object.keys(newObject).forEach((key) => {
    const value = newObject[key]
    if (isFalsy(value))
      delete newObject[key]
  })
  return newObject
}

export function useMount(callback: Function) {
  useEffect(() => {
    callback()
  }, [])
}

export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}
