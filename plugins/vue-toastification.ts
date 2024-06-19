import Toast, { PluginOptions } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const filterBeforeCreate = (toast, toasts) => {
  if (toasts.filter((t) => t.content === toast.content && t.type === toast.type).length !== 0) {
    return false
  }

  return toast
}

const options: PluginOptions = {
  position: 'bottom-right',
  timeout: 5000,
  showCloseButtonOnHover: true,
  filterBeforeCreate,
}

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Toast, options)
})
