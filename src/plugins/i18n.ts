import { createI18n } from 'vue-i18n'
import EN from '@/locales/en-US.json'
import ES from '@/locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: EN,
    es: ES,
  },
})

export default i18n
