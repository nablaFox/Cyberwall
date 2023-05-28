<script setup lang="ts">
export interface TextGradient {
  gradient?: string
  as?: string
  outlined?: boolean
  unrap?: string
}

defineProps<TextGradient>()
</script>

<template>
  <component
    class="font-bold text-bg" 
    :is="as || 'span'"
    :class="[gradient || 'purple-to-pink', { outlined }]"
  >
    <ContentSlot :use="$slots.default" :unwrap="unrap" />
  </component>
</template>

<style scoped lang="postcss">
.outlined,
:deep(.outlined) {
  @apply text-bg-outlined; 
}

:deep(.outlined) {
  background: inherit;
}

.filled,
:deep(.filled) {
  -webkit-text-fill-color: transparent;
  background: inherit;
}

.default,
:deep(.default) {
  -webkit-text-stroke: initial;
  -webkit-text-fill-color: initial;
  -webkit-background-clip: unset;
}
</style>