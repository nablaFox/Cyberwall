<script setup lang="ts">
import type { CTA } from '@/types'

const props = defineProps<{
  image: string
  title: string
  heading: string
  cta?: CTA
}>()

const { src: imageUrl } = await useAsset(props.image)
</script>

<template>

  <PageSection>
    <div class="-mb-10 self-start w-full max-w-[450px] md:self-end md:w-4/5 md:max-w-[787px] lg:mb-0 lg:-ml-[200px] lg:mr-[30px]">
      <img 
        :src="imageUrl" 
        class="blob-img object-cover w-full aspect-[1/1]"
        data-aos="fade-in" 
      />
      <BlobClip />
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
        <ContentSlot :use="$slots.default" unwrap="p" />
      </p>

      <CwButton 
        v-if="cta" 
        :href="cta.link" 
        size="big"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="50"
      >
        {{ cta.text || 'Discover More' }}
      </CwButton>
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