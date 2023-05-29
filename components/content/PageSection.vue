<script setup lang="ts">
export interface PageSection {
  title?: string
  gradient?: string
  headline?: string
  titleAnimation?: string
  fullWidth?: boolean
  noGradient?: boolean
}

const props = defineProps<PageSection>()

const titleParts = computed(() => {
  if (!props.title) return
  const [first, ...rest] = props.title.split(' ')
  return {
    first,
    rest: rest.join(' ')
  }
})
</script>

<template>
  <section 
    :class="{ 'full-width': fullWidth }"
    class="section"
  >
    <slot name="before" />
    
    <div
      v-if="headline || title" 
      class="section-top"
    >
      <h4 v-if="headline" class="text-3xl font-bold">
        {{ headline }}
      </h4>

      <h3
        class="title text-6xl lg:text-[80px] xl:text-[90px] mb-24"
        :data-aos="titleAnimation || 'fade-up'"
        :data-aos-duration="800"
        :class="[!headline && 'text-center']"
      >
        <template v-if="noGradient">
          {{ title }}
        </template>

        <TextGradient v-else :gradient="gradient">
          {{ titleParts?.first }}
  
          <span class="outlined">
            {{ titleParts?.rest }}
          </span>
        </TextGradient>
      </h3>
    </div>

    <div class="section-wrapper">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.section:last-child { @apply mb-[0px] }

.full-width {
  @apply max-w-full p-0;
}
</style>