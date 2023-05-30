<script setup lang="ts">
defineProps<{
  heading?: string
  subheading?: string
  gradient?: string
  image?: string
  imagePos?: number
}>()
</script>

<template>
  
  <PageSection class="mt-0">
    <template #before>
      <Image 
        v-if="image"
        :src="image"
        :class="`absolute pos-${imagePos || 1}`"
      />
    </template>

    <div class="pt-[160px] ">
      <TextGradient
        as="h1"
        class="font-bold leading-[1.15] text-center capitalize mb-6 text-[40px] lg:text-[55px] xl:text-[95px]"
        data-aos="fade-up"
        :gradient="gradient || 'blue-to-pink'"
      >
        <span class="default"> {{ heading }} </span>
        {{ subheading }}
      </TextGradient>

      <slot />
    </div>
  </PageSection>

</template>

<style scoped lang="postcss">
.pos-1 {
  @apply top-[-90px] right-[-50px] max-w-[600px]
  lg:top-0 lg:right-0
  xl:right-[7%] xl:max-w-[800px]
}

.pos-2 {
  @apply top-[unset] right-[unset]
  lg:top-[-15%] lg:left-[30%]
}

.pos-3 {
  @apply top-0 left-[50%] transform translate-x-[-50%] max-w-[none]
}

.pos-4 {
  @apply left-0 top-0
}
</style>