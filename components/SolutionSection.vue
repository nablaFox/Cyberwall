<script setup lang="ts">
import type { Solution } from './Solution.vue'
import type { PageSection } from './PageSection.vue'

interface SolutionSection extends PageSection {
  solutions: Solution[]
}

defineProps<SolutionSection>()
</script>

<template>

  <PageSection 
    class="py-10"
    v-bind="$props"
  >
    <Solution 
      v-bind="solutions[0]"
      class="w-[70%]"
    />

    <Solution
      v-if="solutions[1]"
      v-bind="solutions[1]"
      class="w-2/5 mt-[10%] mr-[15%]"
    />

    <Solution
      v-if="solutions[2]"
      v-bind="solutions[2]"
      class="w-2/5 mt-[85px]"
    />

    <Solution
      v-if="solutions[3]"
      v-bind="solutions[3]"
      class="w-[70%] mt-[150px] mb-[50px] ml-auto"
    />

    <slot />
  </PageSection>

</template>

<style scoped lang="postcss">
:deep(.section-wrapper) { @apply flex justify-between flex-wrap }

.solution { @apply h-[400px] max-w-none }

@media (max-width: theme('screens.lg')) {
  .solution { @apply w-full m-0 !mb-[50px] }
  :deep(.blob) { @apply -z-[1] } 
  :deep(.content) { transform: unset!important }

  .solution::after {
    @apply pseudo top-0 left-0 w-full h-full;
  }

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
    :deep(.content) { @apply !right-5 !left-[unset] }
  }

  .bottom-right :deep(.blob) {
    @apply !-bottom-[50px] -right-[35px]
  }

  .bottom-left :deep(.blob) {
    @apply !-bottom-1/4 -left-[50px]
  }
}
</style>