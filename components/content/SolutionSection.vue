<script setup lang="ts">
import type { Solution } from '../Solution.vue'
import type { PageSection } from '../PageSection.vue'
import type { CTA } from '@/types'

interface SolutionSection extends PageSection {
  solutions: Solution[],
  cta?: CTA
}

const props = defineProps<SolutionSection>()

const solutionCount = computed(() => props.solutions.length)
</script>

<template>

  <PageSection 
    class="py-10"
    v-bind="$props"
  >
    <Solution 
      v-bind="solutions[0]"
      :class="[solutionCount < 3 ? 
        'w-1/3' : 'w-[70%]'
      ]"
    />

    <Solution
      v-if="solutions[1]"
      v-bind="solutions[1]"
      :class="[
        solutionCount < 3 ? 
        'w-1/2 mt-[5%]' : 'w-2/5 mt-[10%] mr-[15%]'
      ]"
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

    <CwButton 
      v-if="cta"
      class="absolute capitalize"
      :href="cta.link"
      :class="[
        solutionCount < 3 && 'left-5 bottom-0',
        solutionCount === 3 && '-bottom-9 right-4',
        solutionCount === 4 && '-bottom-3 right-7'
      ]"
      theme="waterfall"
    >
      {{ cta.text }}
    </CwButton>
  </PageSection>

</template>

<style scoped lang="postcss">
:deep(.section-wrapper) { @apply flex justify-between flex-wrap }

.solution { @apply h-[400px] max-w-none }

@media (max-width: theme('screens.lg')) {
  .solution { @apply w-full m-0 !mb-[50px] }
}
</style>