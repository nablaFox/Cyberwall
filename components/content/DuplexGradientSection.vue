<script setup lang="ts">
defineProps<{
  heading?: string
  gradient?: string
}>()
</script>

<template>
  <PageSection full-width>
    <div
      data-aos="fade-right" 
      class="max-lg:w-full max-lg:mt-[75px] max-lg:mx-auto text-center max-w-[445px] lg:mr-20 px-4"
    >
      <TextGradient as="h3" :gradient="gradient" class="mb-3 text-2xl">
        {{ heading }}
      </TextGradient>
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
:deep(.section-wrapper) {
  @apply flex flex-col-reverse mr-0 md:pl-10 lg:flex-row;
  max-width: var(--section-max-width)
}
</style>
