import axios from 'axios'
import NProgress from 'nprogress'
import { useToast } from 'vue-toastification'
import { useRuntimeConfig } from '~/.nuxt/imports'
import { errorCode, SCREEN_PATH } from '~/constants'
import storage from '~/utils/helpers/storage'
import StringClass from '~/utils/helpers/string'
import { i18n } from '~/utils/helpers/i18n'

const toast = useToast()
const runtimeConfig = useRuntimeConfig()

const http = axios.create({
  baseURL: runtimeConfig.public.environment.API_URL,
})

http.interceptors.request.use(
  function (config) {
    NProgress.start()
    config.headers.Authorization = `Bearer ${storage.getAuth()}`
    config.headers.Accept = 'application/json'
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  function (response) {
    NProgress.done()
    return response
  },
  async function (error) {
    NProgress.done()
    switch (error.response.status) {
      case errorCode.BAD_REQUEST:
        break
      case errorCode.UNAUTHORIZED:
        if (storage.getAuth()) storage.deleteAuth()
        await navigateTo({ name: SCREEN_PATH.AUTH.LOGIN })
        break
      case errorCode.FORBIDDEN:
        await navigateTo({ name: SCREEN_PATH.AUTH.LOGIN })
        break
      default:
        errorToast(error)
        await Promise.reject(error)
        break
    }

    errorToast(error)

    throw error
  },
)

function errorToast(error: object) {
  const { status, data } = error.response
  let message

  if (status === errorCode.INTERNAL_SERVER_ERROR) {
    message = 'internalServerError'
  } else if (data.status === errorCode.BAD_REQUEST) {
    message = data.data[0].message
  } else {
    message = data.message
  }

  toast.error(i18n.t(`error.serverErrors.${StringClass.snakeToCamel(message)}`))
}

export default http
