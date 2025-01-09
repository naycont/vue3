<script setup lang="ts">
import TheLanguageToggle from '@/components/navigation/TheLanguageToggle.vue'
import { useSideNavigationStore } from '@/stores/sideNavigation'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()

const route = useRoute()
const routeName = computed(() => route.name)

const sideNavigationStore = useSideNavigationStore()
const opened =  computed(() => {
  return sideNavigationStore.opened
})

const navigation = computed(() => {
  return [
    {
      name: 'profile',
      title: $t('navigation.menu.profile'),
      icon: 'account_circle',
    },
    {
      name: 'projects',
      title: $t('navigation.menu.projects'),
      icon: 'code',
    },
    {
      name: 'contact',
      title: $t('navigation.menu.contact'),
      icon: 'alternate_email',
    },
  ]
})
</script>
<template>
  <v-navigation-drawer class="navigation" v-model="opened">
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
