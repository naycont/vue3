import { defineStore } from 'pinia'
import { ref } from 'vue'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSideNavigationStore = defineStore('sideNavigation', () => {
  const opened = ref(true)

  const toggle = () => {
    opened.value = !opened.value
  }

  return { opened, toggle }
})
