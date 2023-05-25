<script setup lang="ts">
import type { CTA } from '@/types'
import PageSection from './PageSection.vue'
import Image from './Image.vue'
import Button from './Button.vue'

defineProps<{
  image: string
  title: string
  heading: string
  text: string
  cta?: CTA
}>()
</script>

<template>

  <PageSection>
    <div class="-mb-10 self-start w-full max-w-[450px] md:self-end md:w-4/5 md:max-w-[787px] lg:mb-0 lg:-ml-[200px] lg:mr-[30px]">
      <Image 
        :image="image" 
        class="blob-img object-cover w-full aspect-[1/1]"
        data-aos="fade-in" 
      />
      <svg viewBox="0 0 787 722" class="blob-clip">
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.522 C0.005,0.375,0.112,0.292,0.303,0.15 C0.369,0.097,0.43,0.032,0.522,0.011 C0.578,0,0.645,0.037,0.715,0.105 C0.74,0.13,0.789,0.175,0.821,0.207 C0.939,0.325,1,0.366,0.999,0.455 C0.991,0.521,0.975,0.54,0.937,0.606 C0.904,0.664,0.883,0.69,0.854,0.764 C0.797,0.907,0.754,1,0.697,1 C0.622,1,0.533,0.957,0.423,0.911 C0.341,0.876,0.243,0.867,0.139,0.806 C0.049,0.756,-0.009,0.617,0,0.522" />
          </clipPath>
        </defs>
      </svg>
    </div>
    
    <div class="flex flex-col gap-8 items-start self-start w-full mt-5 md:max-w-[490px] md:-mt-[100px] lg:w-1/2 lg:self-auto lg:mt-0">
      <h3 
        class="text-[120px] md:text-[180px] font-bold purple-to-pink text-bg-outlined leading-[1]"
        data-aos="fade-up"
      >
        {{ title }}
      </h3>

      <h4 class="text-4xl font-bold" data-aos="fade-in">
        {{ heading }}
      </h4>

      <p class="font-thin" data-aos="fade-in">
        {{ text }}
      </p>

      <Button 
        v-if="cta" 
        :href="cta.link" 
        size="big"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="50"
      >
        {{ cta.text || 'Discover More' }}
      </Button>
    </div>
  </PageSection>

</template>

<style scoped lang="postcss">
:deep(.section-wrapper) {
  @apply flex flex-col items-center justify-between lg:flex-row md:gap-12
}

.blob-clip { @apply absolute w-0 h-0 }

.blob-img { clip-path: url('#clip') }

.btn { transition: all }
</style>