<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import type { NavItem } from '@/types'

const { y } = useWindowScroll()
const { isScreenOpen, toggleScreen } = useNav()

defineProps<{
  navItems: NavItem[]
  brand: string
  logo?: string
}>()
</script>

<template>
  <header 
    class="fixed w-full transitions-colors ease duration-300 z-10"
    :class="[y !== 0 || isScreenOpen ? 'bg-purple' : 'bg-transparent']"
  >
    <NavBar
      :logo="logo"
      :brand="brand"
      :is-screen-open="isScreenOpen"
      :items="navItems"
      @toggle-screen="toggleScreen" 
    />
    <NavScreen
      :items="navItems" 
      :open="isScreenOpen"
    />
  </header>
</template>