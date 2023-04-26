<script setup lang="ts">
import type { NavItemWithLink } from '@/types'

defineProps<{ 
  item: NavItemWithLink
}>()
</script>

<template>
  <NuxtLink 
    :to="item.link" 
    class="nav-link"
  >
    {{ item.text }}
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply whitespace-nowrap inline-block;
  &:hover:after { @apply w-full }

  &::after {
    @apply pseudo purple-to-pink rounded-2xl h-[3px] w-0 bottom-[-3px] left-0
    transition-[width] duration-300 ease-in-out
  }
}

.router-link-active::after { @apply w-full }
</style>