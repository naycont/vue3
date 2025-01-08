import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const localeStore = defineStore('currentLocale', () => {
  const { locale } = useI18n({ useScope: 'global' })
  const currentLocale = ref(locale.value)
  const locales: Array<string> = ['en', 'es']

  const toggleLocale = (newLocale: string) => {
    currentLocale.value = newLocale
    locale.value = newLocale
  }

  return { locales, locale: currentLocale, toggleLocale }
})
