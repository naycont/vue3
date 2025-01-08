<script lang="ts" setup>
import ThemeConfiguration from '@/components/header/ThemeConfiguration.vue'
</script>
<template>
  <v-app-bar flat density="compact" border="sm">
    <template v-slot:prepend>
      <v-btn icon="menu"></v-btn>
    </template>
    <template v-slot:append>
      <ThemeConfiguration />
    </template>
  </v-app-bar>
</template>
