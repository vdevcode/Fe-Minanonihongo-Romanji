export default class StringClass {
  static snakeToCamel(string: string | undefined): string {
    if (!string) {
      return ''
    }

    return String(string).replace(/([-_][a-z0-9])/gi, ($sub) => {
      return $sub.toUpperCase().replace('-', '').replace('_', '')
    })
  }

  static pascalToCamel(str: unknown): string {
    return String(str).charAt(0).toLowerCase() + String(str).slice(1)
  }

  static camelToSnake(string: string) {
    return String(string).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
  }

  static kebabToSnake(string: string) {
    return String(string).replace(/-/g, '_')
  }
}
