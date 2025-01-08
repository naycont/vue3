<script setup lang="ts">
import TheSideNavigation from '@/components/navigation/TheSideNavigation.vue'
import TheHeading from '@/components/header/TheHeading.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="app">
    <TheHeading />
    <TheSideNavigation />

    <v-main>
      <div class="main-container">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
