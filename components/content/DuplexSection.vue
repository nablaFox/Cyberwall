<script setup lang="ts">
defineProps<{
  image?: string
  gradient?: string
  headline?: string
}>()
</script>

<template>
  <div class="wrapper">
    <div
      class="absolute w-full top-12 left-0 h-[45%] lg:top-1/2 lg:-translate-y-1/2 lg:h-[calc(100%-100px)]"
      :class="[gradient || 'green-to-blue']" 
    />
    <PageSection>
      <div class="mt-5 max-w-[450px] lg:mt-0 lg:pr-5" data-aos="fade-in"> 
        <h3 class="mb-5 leading-[1] font-bold text-[42px]"> {{ headline }} </h3>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
      <div class="sm:min-w-[475px]"> 
        <Image
          v-if="image" :src="image"
          class="max-w-[200%] w-full h-[400px] lg:h-[530px] rounded-sm"
          data-aos="fade-in"
        />
      </div>
    </PageSection>
  </div>
</template>

<style scoped lang="postcss">
:deep(.section-wrapper) {
  @apply flex flex-col-reverse items-center justify-between max-w-[475px] mx-auto
  lg:max-w-[1000px] lg:ml-auto lg:mr-0 lg:flex-row;
}
</style>