<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const themeNames = {
  light: 'light',
  dark: 'dark',
}

const themeConfiguration = {
  [themeNames.light]: {
    tooltip: 'switch to dark theme',
    icon: 'dark_mode',
  },
  [themeNames.dark]: {
    tooltip: 'switch to light theme',
    icon: 'light_mode',
  },
}

const theme = useTheme()

const isDarkMode = computed(() => {
  return theme.global.current.value.dark
})

const currentTheme = computed(() => {
  return isDarkMode.value ? themeNames.dark : themeNames.light
})

const currentThemeConfiguration = computed(() => {
  return themeConfiguration[currentTheme.value]
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
