import i18nInstance from '~/utils/helpers/i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18nInstance)
})
