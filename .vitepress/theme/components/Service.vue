<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Image from './Image.vue'

export interface Service {
  name: string
  blob: string
  icon: string
  description: string
}

const props = defineProps<Service>()
const iconComponent = defineAsyncComponent(() => import(`./icons/${props.icon}Icon.vue`))
</script>

<template>
  <div 
    class="service text-center px-8 w-full max-w-[400px] md:w-1/2 md:max-w-[unset] mx-auto"
    data-aos="fade-in"
    data-aos-delay="200"
  >
    <div class="h-[105px]">
      <Image 
        :image="blob" 
        class="blob absolute -translate-x-2/4"
      />
      <component :is="iconComponent" />
    </div>
    <div>
      <h3 class="font-semibold text-[26px] my-3">
        {{ name }}
      </h3>
      <p class="font-thin"> 
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.blob {
  &:nth-of-type(1) { @apply left-[62%] top-[-80px] }
  &:nth-of-type(2) { @apply left-[39%] top-[-105px] }
  &:nth-of-type(3) { @apply left-[50%] top-[-105px] }
  &:nth-of-type(4) { @apply left-[45%] top-[-80px] }
}
</style>