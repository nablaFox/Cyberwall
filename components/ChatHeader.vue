<script setup lang="ts">
import ArrowIcon from './icons/ArrowIcon.vue'

defineProps<{
  title?: string
}>()

defineEmits(['exit'])
</script>

<template>

  <div class="absolute z-[1] flex items-center top-0 left-0 pl-1 bg-transparent py-4 w-[98%] chat-header">
    <button @click="$emit('exit')" class="flex items-center capitalize">
      <ArrowIcon />
      
      <TextGradient class="text-2xl" gradient="blue-to-pink"> 
        {{ title }}
      </TextGradient>
    </button>
  </div>

</template>

<style lang="postcss" scoped>
.chat-header::before {
  @apply pseudo w-full h-full;
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  z-index: -1;
  top: -1px;
}
</style>