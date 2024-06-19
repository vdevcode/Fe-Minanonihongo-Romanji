const TOKEN_AUTH = 'accessToken'

const saveAuth = (token: string | null) => {
  if (token) {
    window.localStorage.setItem(TOKEN_AUTH, token)
  }
}

const deleteAuth = () => {
  window.localStorage.removeItem(TOKEN_AUTH)
}

const getAuth = (): string => {
  return window.localStorage.getItem(TOKEN_AUTH) || ''
}

export default {
  getAuth,
  saveAuth,
  deleteAuth,
}
