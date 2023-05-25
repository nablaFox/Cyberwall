<script setup lang="ts">
import type { Solution as SolutionType } from './Solution.vue'
import type { PageSection as Section } from './PageSection.vue'
import type { CTA } from '@/types'

import { computed } from 'vue'

import Solution from './Solution.vue'
import PageSection from './PageSection.vue'
import Button from './Button.vue'

interface Solutions {
  items: SolutionType[]
  section?: Section
  cta?: CTA
}

const props = defineProps<Solutions>()
const total = computed(() => props.items.length)
</script>

<template>

  <PageSection 
    class="py-10"
    v-bind="section"
  >
    <Solution 
      v-bind="items[0]"
      :class="[
        total < 3 ? 'w-1/3' : 'w-[70%]',
        total < 2 && 'full-width'
      ]"
    />

    <Solution
      v-if="items[1]"
      v-bind="items[1]"
      :class="[
        total < 3 ? 'w-1/2 mt-[5%]' : 'w-2/5 mt-[10%] mr-[15%]'
      ]"
    />

    <Solution
      v-if="items[2]"
      v-bind="items[2]"
      class="w-2/5 mt-[85px]"
    />

    <Solution
      v-if="items[3]"
      v-bind="items[3]"
      class="w-[70%] mt-[150px] mb-[50px] ml-auto"
    />

    <Button 
      v-if="cta && total > 1"
      class="absolute capitalize"
      :href="cta.link"
      :class="[
        total < 3 && 'left-5 bottom-0',
        total === 3 && '-bottom-9 right-4',
        total === 4 && '-bottom-3 right-7'
      ]"
      theme="waterfall"
    >
      {{ cta.text }}
    </Button>
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