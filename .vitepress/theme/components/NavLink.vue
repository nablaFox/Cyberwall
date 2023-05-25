<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import type { NavItemWithLink } from '@/types'

const props = defineProps<{ 
  item: NavItemWithLink
}>()

const route = useRoute()
const active = computed(() => {
  return route.path === props.item.link
})
</script>

<template>
  <a 
    :href="item.link" 
    class="nav-link"
    :class="{ active }"
  >
    {{ item.text }}
  </a>
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

.active::after { @apply w-full }
</style>