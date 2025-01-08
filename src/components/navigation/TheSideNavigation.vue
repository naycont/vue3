<script setup lang="ts">
import TheLanguageToggle from '@/components/navigation/TheLanguageToggle.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const routeName = computed(() => route.name)

const navigation = [
  {
    name: 'profile',
    title: 'Profile',
    icon: 'account_circle',
  },
  {
    name: 'projects',
    title: 'Projects',
    icon: 'code',
  },
  {
    name: 'contact',
    title: 'Contact',
    icon: 'alternate_email',
  },
]
</script>
<template>
  <v-navigation-drawer class="navigation">
    <v-list-item
      v-for="navigationItem in navigation"
      :key="navigationItem.name"
      :title="navigationItem.title"
      :prepend-icon="navigationItem.icon"
      :to="navigationItem.name"
      :active="routeName === navigationItem.name"
    ></v-list-item>
    <template v-slot:append>
      <div class="navigation__footer">
        <v-divider class="mb-2"></v-divider>
        <TheLanguageToggle />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.navigation {
  &__footer {
    padding: var(--ui-padding);
  }
}
</style>
