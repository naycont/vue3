<script setup lang="ts">
import TheLanguageToggle from '@/components/navigation/TheLanguageToggle.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const routeName = computed(() => route.name)

const navigation = [
  {
    name: 'profile',
    title: 'Home',
    icon: 'home',
  },
  {
    name: 'projects',
    title: 'Projects',
    icon: 'code',
  },
]
</script>
<template>
  <v-navigation-drawer class="navigation" floating>
    <v-list-item
      v-for="navigationItem in navigation"
      :key="navigationItem.name"
      :title="navigationItem.title"
      :prepend-icon="navigationItem.icon"
      link
      :active="routeName === navigationItem.name"
    ></v-list-item>
    <template v-slot:append>
      <div class="navigation__footer">
        <TheLanguageToggle />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.navigation {
  &__footer {
    display: flex;
    justify-content: center;
    padding: var(--ui-padding);
  }
}
</style>
