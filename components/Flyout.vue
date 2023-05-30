<script setup lang="ts">
import type { NavItemWithLink } from '@/types'

const props = defineProps<{ 
  items: NavItemWithLink[]
}>()

const open = ref(false)
const firstItem = computed(() => props.items[0])
const restItems = computed(() => props.items.slice(1))
</script>

<template>
  <div 
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <NavLink :item="firstItem" :aria-expanded="open" />

    <div 
      class="menu px-2 pb-3 pt-1 mt-2 absolute z-10 gap-2 flex flex-col veiled translate-x-[-8px]"
      :style="{ backgroundColor: 'var(--background-color)' }"
    >
      <NavLink v-for="item in restItems" :item="item" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.nav-link[aria-expanded="true"] + .menu { @apply unveiled }
</style>