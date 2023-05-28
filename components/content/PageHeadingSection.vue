<script setup lang="ts">
import { useElementSize } from '@vueuse/core'

const props = defineProps<{
  heading?: string
  subheading?: string
  gradient?: string
  image?: string
  imagePos?: number
}>()

const container = ref<HTMLElement>()
const { width } = useElementSize(container)

const fontSize = computed(() => {
  if (!container.value || !props.heading) return '80px'
  if (width.value < 400) return '40px'
  const maxWidth = width.value * 0.9 // 80% of container width
  const textWidth = getTextWidth(props.heading, 'bold 180px sans-serif')
  const ratio = maxWidth / textWidth
  const fontSize = 180 * ratio
  return `${fontSize}px`
})

function getTextWidth(text: string, font: string) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!
  context.font = font
  const metrics = context.measureText(text)
  return metrics.width
}
</script>

<template>

  <section class="section mt-0" ref="container">
    <Image 
      v-if="image"
      :src="image"
      :class="`absolute pos-${imagePos || 1}`"
    />

    <div class="pt-[160px] ">
      <TextGradient
        as="h1"
        class="font-bold leading-[1.15] text-center capitalize mb-6"
        data-aos="fade-up"
        :style="{ fontSize }"
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