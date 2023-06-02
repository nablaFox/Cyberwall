<script setup lang="ts">
import ArrowIcon from './icons/ArrowIcon.vue'

defineProps<{
  title?: string
}>()
</script>

<template>

  <div class="absolute z-[1] flex items-center top-0 bg-transparent py-4 w-full chat-header">
    <button @click="$router.push('/contacts')" class="flex items-center capitalize">
      <ArrowIcon />
      <TextGradient class="text-2xl" gradient="blue-to-pink"> 
        {{ title }}
      </TextGradient>
    </button>
  </div>

</template>

<style lang="postcss" scoped>
.chat-header::before {
  @apply pseudo w-full h-full top-[-1px] z-[-1] left-[-10px];
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
}
</style>