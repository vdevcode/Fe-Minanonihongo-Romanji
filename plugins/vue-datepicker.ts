import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VueDatePicker', VueDatePicker)
})
