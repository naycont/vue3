<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useLocalStorage } from '@vueuse/core'

const { locale } = useI18n({ useScope: 'global' })

const locales: Array<string> = ['en', 'es']

const currentLocale = useLocalStorage('locale', 'en')

const toggleLocale = (newLocale: string) => {
  locale.value = newLocale
}
</script>
<template>
  <div class="d-flex align-center justify-space-between">
    <v-icon>language</v-icon>
    <v-btn-toggle density="compact" rounded group variant="text" v-model="currentLocale">
      <v-btn v-for="locale in locales" :key="locale" :value="locale" @click="toggleLocale(locale)">
        {{ locale }}
      </v-btn>
    </v-btn-toggle>
  </div>
</template>
