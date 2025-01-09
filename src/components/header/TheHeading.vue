<script lang="ts" setup>
import ThemeConfiguration from '@/components/header/ThemeConfiguration.vue'
import { useSideNavigationStore } from '@/stores/sideNavigation'

const sideNavigationStore = useSideNavigationStore()

const toggleSideNavigation = () => {
  sideNavigationStore.toggle()
}

</script>
<template>
  <v-app-bar flat density="compact" border="sm">
    <template v-slot:prepend>
      <v-btn icon="menu" @click="toggleSideNavigation"></v-btn>
    </template>
    <template v-slot:append>
      <ThemeConfiguration />
    </template>
  </v-app-bar>
</template>
