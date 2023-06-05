<script setup lang="ts">
withDefaults(defineProps<{
  centered?: boolean
}>(), { centered: true })
</script>

<template>
  <div 
    class="flex flex-col sm:flex-row max-w-[975px]"
    :class="centered && 'mx-auto'"
  >
    <div class="left w-full sm:pr-8 sm:w-1/2">
      <slot name="left" />
    </div>
    <div class="right w-full sm:w-1/2">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
:deep(p) {
  @apply my-4
}
</style>
