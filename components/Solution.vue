<script setup lang="ts">
export interface Solution {
  headline: string
  name: string
  image: string
  blob: 'top-right' | 'bottom-right' | 'bottom-left'
  type?: 'full-width'
}

const props = defineProps<Solution>()
const { default: solutionUrl } = await import(`~/assets/images/${props.image}.jpg`)
</script>

<template>
  <div 
    :class="[blob, type]"
    class="solution max-w-[800px] relative" 
    data-aos="fade-in"
    data-aos-duration="600"
  >
    <img
      :src="solutionUrl"
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

.full-width {
  @apply w-full h-[500px] !max-w-none flex items-end;
  .content { 
    @apply w-full relative inset-0 max-w-[1000px] mx-auto px-6;
    h4 { @apply text-base tracking-[4px] }
    h3 { @apply text-4xl }
  }

  .blob { @apply -bottom-[14%] left-0 lg:left-[unset] lg:right-1/2 lg:-translate-x-1/2 }
}
</style>