<script setup lang="ts">
import TheSideNavigation from '@/components/navigation/TheSideNavigation.vue'
import TheAppBar from '@/components/TheAppBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="app">
    <TheAppBar />
    <TheSideNavigation />

    <v-main>
      <div class="main-container">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
