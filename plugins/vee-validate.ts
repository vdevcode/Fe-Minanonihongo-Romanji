import { defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

export default defineNuxtPlugin(() => {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule])
  })

  configure({
    validateOnInput: true,
    generateMessage: localize({
      en: {
        messages: {
          required: '{field} is required',
          email: 'Invalid email address',
          confirmed: '{field} does not match',
          min: '{field} must be at least 0:{min} characters',
          max: '{field} must be limited to 0:{max} characters',
        },
      },
      ja: {
        messages: {
          required: '{field}が必要です',
          email: '無効なメールアドレスです',
          confirmed: '{field} が一致しません',
          min: '{field}は少なくとも0:{min}文字である必要があります。',
          max: '{field}は0:{max}文字に制限されています。',
        },
      },
    }),
  })
})
