<script lang="ts" setup>
import { ref, computed } from 'vue'
import { localeStore } from '@/stores/locale'

const store = localeStore()

const locales = computed(() => {
  return store.locales
})

const currentLocale = ref(store.locale)

const toggleLocale = (newLocale: string) => {
  store.toggleLocale(newLocale)
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
