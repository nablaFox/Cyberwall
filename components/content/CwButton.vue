<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps<{
  href?: string
  theme?: 'outlined' | 'waterfall' | 'waterfall-2'
  size?: 'small' | 'medium' | 'big'
  unwrap?: boolean
  gradient?: string
}>()

const as = computed(() => props.href ? NuxtLink : 'button')
const isWaterfall = computed(() => props.theme?.includes('waterfall'))
</script>

<template>
  <component 
    class="btn" 
    :class="[theme, size]"
    :is="as"
    :to="props.href"
  >
    <span class="underline" v-if="isWaterfall" :class="[gradient || 'purple-to-pink'] "/>
    <ContentSlot :use="$slots.default" :unwrap="unwrap && 'p'"/>
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

.underline {
  @apply bottom-0 transition-[height] duration-300 ease-in-out rounded-none z-[-1]
}

.btn.waterfall,
.btn.waterfall-2 {
  &:hover .underline { @apply h-full }
  @apply bg-transparent border-0 px-2 py-1
}

.btn.waterfall-2 .underline { @apply bottom-[10px] }
</style>