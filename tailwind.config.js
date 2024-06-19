/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {}
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
}
