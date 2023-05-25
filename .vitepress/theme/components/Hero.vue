<script setup lang="ts">
import type { CTA } from '@/types'

import Image from './Image.vue'
import Scroller from './Scroller.vue'
import Button from './Button.vue'

defineProps<{
  cta?: CTA[]
  text?: string
  background?: string
}>()
</script>

<template>
  <div class="min-h-[100vh] flex gap-12 flex-col items-center justify-center max-w-[1050px] m-auto px-10 sm:px-[90px] overflow-hidden z-[1]">
    <Image 
      v-if="background"
      :image="background"
      class="absolute -z-[1] min-w-[560px] opacity-50 object-contain"
      alt="hero background"
    />

    <h1 
      class="font-bold text-center text-2xl xs:text-3xl sm:text-[40px] sm:leading-[56px] md:text-5xl"
      data-aos="fade-up" 
    > 
      {{ text }}
    </h1>

    <div
      v-if="cta" 
      class="hero-buttons flex flex-col gap-4 sm:flex-row sm:gap-8 justify-center"
    >
      <Button :href="cta[0].link"> 
        {{ cta[0].text }} 
      </Button>
      <Button theme="outlined" :href="cta[1].link"> 
        {{ cta[1].text }} 
      </Button>
    </div>

    <Scroller class="absolute bottom-14"/>
  </div>
</template>

<style scoped>
.hero-buttons .btn { min-width: 240px }
</style>