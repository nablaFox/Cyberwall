<script setup lang="ts">
export interface PageSection {
  title?: string
  gradient?: string
  headline?: string
  titleAnimation?: string
}

const props = defineProps<PageSection>()

const titleParts = computed(() => {
  if (!props.title) return
  const [firstWord, ...rest] = props.title.split(' ')
  return {
    firstWord,
    rest: rest.join(' ')
  }
})
</script>

<template>
  <section class="section">
    <div class="section-top">
      <h4
        v-if="headline"
        class="text-3xl font-bold"
      >
        {{ headline }}
      </h4>
      
      <h3 
        v-if="titleParts"
        class="text-purple-1 title font-bold text-6xl lg:text-[80px] xl:text-[90px] mb-24 text-bg"
        :class="[!headline && 'text-center', gradient || 'purple-to-pink']"
        :data-aos="titleAnimation || 'fade-up'"
        data-aos-duration="800"
      >
        {{ titleParts.firstWord }}
        <span class="text-bg-outlined"> 
          {{ titleParts.rest }}
        </span> 
      </h3>
    </div>

    <div class="section-wrapper">
      <slot />
    </div>
  </section>
</template>
