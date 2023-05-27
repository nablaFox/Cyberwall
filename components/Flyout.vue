<script setup lang="ts">
import type { NavItemWithLink } from '@/types'

defineProps<{ 
  button?: string
  items: NavItemWithLink[]
}>()

const open = ref(false)
</script>

<template>
  <div 
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button 
      v-if="button"
      :aria-expanded="open"
      @click="open = !open"
      class="capitalize"
    > 
      {{ button }}
    </button>

    <div class="menu bg-purple px-2 pb-3 pt-1 absolute z-10 gap-2 flex flex-col veiled translate-x-[-8px]">
      <NavLink v-for="item in items" :item="item" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
button[aria-expanded="true"] + .menu { @apply unveiled }
</style>