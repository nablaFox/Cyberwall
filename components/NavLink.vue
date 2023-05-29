<script setup lang="ts">
import type { NavItemWithLink } from '@/types'

defineProps<{ 
  item: NavItemWithLink
  gradient?: string
}>()
</script>

<template>
  <NuxtLink 
    :to="item.link" 
    class="nav-link capitalize"
  >
    {{ item.text }}
    
    <span 
      class="underline w-0 transition-[width] duration-300 ease-in-out" 
      :class="gradient || 'purple-to-pink'"
    />
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply whitespace-nowrap inline-block;
  &:hover .underline {
    @apply w-full
  }
}

.router-link-active .underline { @apply !w-full }
</style>