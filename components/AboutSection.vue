<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  heading: string
  link?: string
  cta?: string
}>()

const { src: imageUrl } = await useAsset(props.image)
</script>

<template>
  <DuplexSection gap="0">
    <template #left>
      <img 
        :src="imageUrl" 
        class="blob-img object-cover w-full aspect-[1/1]"
        data-aos="fade-in" 
      />

      <BlobClip />
    </template>

    <template #right>
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
        <slot />
      </p>

      <Button 
        v-if="link" 
        :link="link" 
        size="big"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="50"
      >
        {{ cta || 'Discover More' }}
      </Button>

      <slot name="content" />
    </template>

    <slot />
  </DuplexSection>
</template>

<style scoped lang="postcss">
:deep(.right) { 
  @apply flex flex-col gap-8 items-start self-start w-full mt-5
  md:max-w-[490px] md:-mt-[100px]
  lg:w-1/2 lg:self-auto lg:mt-0
}
:deep(.left) { 
  @apply -mb-10 self-start w-full max-w-[450px]
  md:self-end md:w-4/5 md:max-w-[787px]
  lg:mb-0 lg:-ml-[200px] lg:mr-[30px]
}

.blob-clip { @apply absolute w-0 h-0 }

.blob-img { clip-path: url('#clip') }

.btn { transition: all }
</style>