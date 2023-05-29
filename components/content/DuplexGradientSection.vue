<script setup lang="ts">
defineProps<{
  gradient?: string
  headline?: string
}>()
</script>

<template>
  <PageSection full-width>
    <div
      data-aos="fade-right" 
      class="max-lg:w-full max-lg:mt-[75px] max-lg:mx-auto text-center max-w-[445px] lg:mr-20 px-4"
    >
      <slot name="left" />
    </div>

    <div 
      class="max-lg:self-end w-3/4 h-[250px] lg:w-full lg:h-[450px]"
      :class="gradient || 'purple-to-pink'"
      data-aos="fade-left"
    > 
      <p 
        class="absolute font-semibold p-3 bottom-[40px] left-[-40px] max-w-[495px] text-[28px] md:text-[34px] lg:max-w-[475px] lg:leading-[1] lg:text-[46px]"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <ContentSlot :use="$slots.right" unwrap="p" />
      </p>
    </div>
  </PageSection>
</template>

<style scoped lang="postcss">
:deep(h3, h2, h1, h4, h5, h6) {
  @apply mb-3 text-2xl;
}

:deep(.section-wrapper) {
  @apply flex flex-col-reverse lg:flex-row ml-auto max-w-[1220px] md:pl-10
}
</style>
