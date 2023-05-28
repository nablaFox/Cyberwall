<script setup lang="ts">
import type { PageSection } from './PageSection.vue'
import DeviseIcon from '../icons/DeviseIcon.vue'
import QuestionIcon from '../icons/QuestionIcon.vue'
import TrophyIcon from '../icons/TrophyIcon.vue'
import WarningIcon from '../icons/WarningIcon.vue'

export interface SwotSection extends PageSection {
  opportunities?: string
  strengths?: string
  weaknesses?: string
  threats?: string
  [key: string]: any // Add index signature to allow for dynamic property access
}

const swot = [
  { icon: TrophyIcon, title: 'strengths' },
  { icon: QuestionIcon, title: 'weaknesses' },
  { icon: DeviseIcon, title: 'opportunities' },
  { icon: WarningIcon, title: 'threats' }
]

defineProps<SwotSection>()
</script>

<template>

  <PageSection class="!pb-24" full-width>
    <template #before>
      <img 
        class="absolute top-[-300px] left-[-100px] md:left-0 lg:top-0"
        src="@/assets/images/curves-3.svg" 
      />
      <img 
        class="absolute right-0 top-full lg:top-1/2"
        src="@/assets/images/curves-4.svg" 
      />
    </template>
    <ClientOnly>
      <swiper-container
        class="lg:py-28"
        effect="fade"
        space-between="30"
        navigation="true"
        pagination="true"
        :fadeEffect="{ crossFade: true }"
      >
        <swiper-slide
          v-for="slide in swot"
          :key="slide.title"
        >
          <div class="max-w-[550px] mx-auto flex flex-col items-center gap-5 text-center pb-14">
            <div>
              <component :is="slide.icon" />
              <h4 class="my-4 font-bold capitalize text-2xl"> {{ slide.title }} </h4>
            </div>
            
            <p> <span v-html="$props[slide.title]"></span> </p>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </PageSection>

</template>

<style scoped lang="postcss">
:deep(.title) {
  @apply text-7xl lg:text-9xl lg:pt-24 mb-0
}

:deep(.section-wrapper) {
  @apply section
}
</style>