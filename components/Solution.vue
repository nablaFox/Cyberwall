<script setup lang="ts">
export interface Solution {
  headline: string
  name: string
  image: string
  blob?: 'top-right' | 'bottom-right' | 'bottom-left'
  type?: 'full-width'
}

defineProps<Solution>()
</script>

<template>
  <div 
    :class="[blob || 'top-right', type]"
    class="solution max-w-[800px] relative h-[400px]" 
    data-aos="fade-in"
    data-aos-duration="600"
  >
    <Image
      :src="image"
      class="background object-cover absolute w-full h-full"
    />
    <img 
      src="~/assets/images/blob.svg" 
      class="blob absolute"
    />
    <div class="content absolute w-80 text-right z-10"> 
      <h4 class="mb-2 uppercase font-thin text-[14px] tracking-[3px]"> 
        {{ headline }} 
      </h4>
      <h3 class="text-3xl font-semibold mb-5"> {{ name }} </h3>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.top-right {
  .blob { @apply top-[-35px] right-[-84px] }
  .content { @apply top-10 left-[95%] -translate-x-2/4 }
}

.bottom-right {
  .blob { @apply -bottom-20 -right-5 }
  .content { @apply bottom-5 right-[5%] }
}

.bottom-left {
  .blob { @apply -bottom-1/4 -left-[50px] }
  .content { @apply bottom-5 left-5 text-left }
}

.blob { @apply z-10 }
.solution::after { @apply pseudo top-0 left-0 w-full h-full }

.full-width {
  @apply w-full !h-[500px] !max-w-none flex items-end;
  & h4 { @apply text-base tracking-[4px] }
  & h3 { @apply text-4xl }

  .content { 
    @apply w-full relative inset-0 max-w-[1000px] mx-auto px-6 text-left;
    transform: none;
  }

  .blob { 
    @apply top-[unset] right-[unset] -bottom-[14%] lg:left-[unset] lg:right-1/2 lg:-translate-x-1/2
  }

  &::after {
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0.75) 100%)!important;
  }
}

@media (max-width: theme('screens.lg')) {
  .top-right::after {
    background-image: radial-gradient(circle at top 20px right 20px, theme('colors.purple.DEFAULT') 0%,transparent 100%)
  }

  .bottom-right::after {
    background-image: radial-gradient(circle at bottom 20px right 20px, theme('colors.purple.DEFAULT') 0%,transparent 100%)
  }

  .bottom-left::after {
    background-image: radial-gradient(circle at bottom 20px left 20px, theme('colors.purple.DEFAULT') 0%,transparent 100%)
  }

  .top-right,
  .bottom-right {
    .content { @apply !right-5 !left-[unset] }
  }

  .bottom-right :deep(.blob) {
    @apply !-bottom-[50px] -right-[35px]
  }

  .bottom-left :deep(.blob) {
    @apply !-bottom-1/4 -left-[50px]
  }

  .blob { @apply -z-[1] }
  .content { transform: unset!important }
}
</style>