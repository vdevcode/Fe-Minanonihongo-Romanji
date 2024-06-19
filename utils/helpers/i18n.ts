import { createI18n } from 'vue-i18n'
import en from '~/locales/en.json'
import ja from '~/locales/ja.json'

const instance = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: {
    en,
    ja,
  },
})

export default instance

export const i18n = instance.global
