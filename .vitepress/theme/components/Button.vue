<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href?: string
  theme?: 'outlined' | 'waterfall'
  size?: 'small' | 'medium' | 'big'
}>()

const as = computed(() => props.href ? 'a' : 'button')
</script>

<template>
  <component 
    class="btn" 
    :class="[theme, size]"
    :is="(as as any)" 
    :href="props.href" 
  >
    <slot />
  </component>
</template>

<style scoped lang="postcss">
.btn {
  @apply transition-colors duration-300 ease-in-out py-2 px-7 bg-purple-1 outline-0 inline-block text-center
  font-medium rounded-[50px] hover:bg-transparent border-2 border-purple-1 leading-[1.15]
}

.btn.outlined { @apply bg-transparent hover:bg-purple-1 }

.btn.big { @apply px-11 py-[15px] }

.btn.small {
  @apply px-5 py-[10px] text-[12px]
}

.btn.waterfall {
  &::after {
    @apply pseudo w-full h-[3px] bottom-0 left-0 purple-to-pink z-[-1]
    transition-[height] duration-300 ease-in-out
  }
  &:hover::after { @apply h-full }
  @apply bg-transparent border-0 px-2 py-1
}
</style>