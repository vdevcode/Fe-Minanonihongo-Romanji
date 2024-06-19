import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('VueMultiselect', VueMultiselect)
})
