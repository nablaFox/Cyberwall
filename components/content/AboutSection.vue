<script setup lang="ts">
defineProps<{
  image: string
  title: string
  heading: string
  cta?:  {
    text: string
    link: string
  }
}>()
</script>

<template>
  <PageSection>
    <div class="-mb-10 self-start w-full max-w-[450px] md:self-end md:w-4/5 md:max-w-[787px] lg:mb-0 lg:-ml-[200px] lg:mr-[30px]">
      <BlobImage :image="image" />
    </div>
    
    <div class="flex flex-col gap-8 items-start self-start w-full mt-5 md:max-w-[490px] md:-mt-[100px] lg:w-1/2 lg:self-auto lg:mt-0">
      <TextGradient
        class="text-[120px] md:text-[180px] leading-[1]"
        as="h3"
        data-aos="fade-up"
        outlined
      >
        {{ title }}
      </TextGradient>

      <h4 class="text-4xl font-bold" data-aos="fade-in">
        {{ heading }}
      </h4>

      <p data-aos="fade-in">
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

.btn { transition: all }
</style>