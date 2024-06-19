export function getKeyTable(key: number, currentPage: number, perPage: number) {
  let number = key + 1

  if (currentPage > 1) {
    number = number + perPage * currentPage - perPage
  }

  return number
}
