<script setup lang="ts">
defineProps<{
  heading?: string
  subheading?: string
  gradient?: string
  image?: string
  imagePos?: number
  fullWidth?: boolean
}>()
</script>

<template>

  <section class="section mt-0" ref="container" :class="fullWidth && '!max-w-none p-0'">
    <Image 
      v-if="image"
      :src="image"
      :class="`absolute pos-${imagePos || 1}`"
    />

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
  </section>

</template>

<style scoped lang="postcss">
.pos-1 {
  @apply top-[-95px] right-[-50px] max-w-[600px] 
  md:top-[0px] md:right-[-10px]
  2xl:right-[-12%] xl:max-w-[800px]
}

.pos-2 {
  @apply top-[unset] right-[unset]
  lg:top-[-15%] lg:right-[-150px]
}

.pos-3 {
  @apply top-0 left-[50%] transform translate-x-[-50%] max-w-[none]
}
</style>