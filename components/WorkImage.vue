<script setup lang="ts">
defineProps<{
  active: boolean
  shape: string
  activeShape: string
  activeImage?: string
}>()
</script>

<template>

  <div class="work-image absolute">
    <Image 
      class="shape"
      :class="{ 'opacity-0' : active }"
      :src="shape" 
    />

    <Image 
      class="active-shape absolute opacity-0 top-0 left-0"
      :class="{ 'opacity-100': active }"
      :src="activeShape" 
    />

    <Image
      v-if="activeImage"
      class="active-image absolute opacity-0 bg-cover bg-center delay-150"
      :class="{ 'opacity-100': active }" 
      :src="activeImage"
    />
  </div>

</template>

<style scoped lang="postcss">
.shape,
.active-shape,
.active-image {
  @apply transition-opacity ease-in-out duration-[400ms] delay-100
}

.active-shape,
.active-image {
  @apply w-full h-full
}

img,
.work-image {
  transform-style: preserve-3d;
}
</style>