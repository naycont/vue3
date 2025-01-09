<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
const { t: $t } = useI18n()

const themeNames = {
  light: 'light',
  dark: 'dark',
}

const themeConfiguration = computed(() => {
  return {
    [themeNames.light]: {
      tooltip: $t('theme.switch', { theme: themeNames.dark }),
      icon: 'dark_mode',
    },
    [themeNames.dark]: {
      tooltip: $t('theme.switch', { theme: themeNames.light }),
      icon: 'light_mode',
    },
  }
})

const theme = useTheme()

const isDarkMode = computed(() => {
  return theme.global.current.value.dark
})

const currentTheme = computed(() => {
  return isDarkMode.value ? themeNames.dark : themeNames.light
})

const currentThemeConfiguration = computed(() => {
  return themeConfiguration.value[currentTheme.value]
})

const toggleTheme = () => {
  theme.global.name.value = isDarkMode.value ? themeNames.light : themeNames.dark
}
</script>

<template>
  <v-tooltip :text="currentThemeConfiguration.tooltip">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" :icon="currentThemeConfiguration.icon" @click="toggleTheme"></v-btn>
    </template>
  </v-tooltip>
</template>
