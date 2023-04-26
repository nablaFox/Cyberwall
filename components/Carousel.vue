<script setup lang="ts">
interface Slide {
  text: string
  image: string
  link: string
}

const props = defineProps<{
  slides: Slide[]
}>()

const imageUrls = await Promise.all(props.slides.map(async ({ image }) => {
  const { default: imageUrl } = await import(`~/assets/images/${image}.jpg`)
  return imageUrl as string
}))
</script>

<template>
  <swiper-container
    slides-per-view="1"
    centered-slides="true"
    space-between="50"
    autoplay-delay="2600"
    initial-slide="4"
    loop="true"
    :breakpoints="{
      400: { slidesPerView: 2.5 },
      1400: { slidesPerView: 3.5 }
    }"
  >
    <swiper-slide
      v-for="slide, i in slides"
      class="h-[500px] scale-90 bg-center bg-cover"
      :style="{ backgroundImage: `url(${imageUrls[i]})` }"
      :key="i"
    >
      <div class="z-[1] w-[90%] left-1/2 -translate-x-2/4 text-center absolute bottom-8">
        <h3 class="my-8 font-bold text-3xl"> {{ slide.text }}</h3>
        <Button size="big" :href="slide.link"> 
          Read More 
        </Button>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped lang="postcss">
.swiper-slide-active {
  @apply border-4 border-pink-1 scale-100;
  &:after { @apply bg-black/20 }
}

swiper-slide:not(.swiper-slide-active) .btn {
  @apply !bg-purple !border-white hover:!bg-purple-1 hover:!border-purple-1 
}

swiper-slide:after {
  @apply pseudo w-full h-full bg-black/50 left-0 top-0;
}
</style>