<script lang="ts" setup>
import { ref } from 'vue'

const languages: Array<string> = ['EN', 'ES']
const currentLanguage = ref(languages[0])

const changeLanguage = (newLanguage: string) => {
  currentLanguage.value = newLanguage
}
</script>
<template>
  <v-btn-toggle density="compact" rounded group variant="text" v-model="currentLanguage">
    <v-btn
      v-for="language in languages"
      :key="language"
      :value="language"
      @click="changeLanguage(language)"
    >
      {{ language }}
    </v-btn>
  </v-btn-toggle>
</template>
