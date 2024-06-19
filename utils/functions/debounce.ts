export function debounce(func: () => void, timeout: number) {
  let timeoutId: string | number | NodeJS.Timeout
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}
