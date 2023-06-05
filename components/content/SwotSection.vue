<script setup lang="tsx">
import { useWindowSize } from '@vueuse/core'

import DeviseIcon from '../icons/DeviseIcon.vue'
import QuestionIcon from '../icons/QuestionIcon.vue'
import TrophyIcon from '../icons/TrophyIcon.vue'
import WarningIcon from '../icons/WarningIcon.vue'

const { width } = useWindowSize()

function Slide(props: any, { slots }: { slots: any }) {
  return (
    <swiper-slide>
      <div class="max-sm:px-1 max-lg:pb-12 max-w-[500px] mx-auto flex flex-col items-center gap-5 text-center">
        <div>
          <props.icon />
          <h4 class="my-4 font-bold capitalize text-2xl"> 
            { props.title } 
          </h4>
        </div>
        
        <p> { slots.default() } </p>
      </div>
    </swiper-slide>
  )
}
</script>

<template>

  <PageSection :compact="width > 950">
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
        pagination="true"
        :fadeEffect="{ crossFade: true }"
      >
        <Slide :icon="TrophyIcon" title="strengths">
          <slot name="strengths" />
        </Slide>

        <Slide :icon="QuestionIcon" title="weaknesses">
          <slot name="weaknesses" />
        </Slide>

        <Slide :icon="DeviseIcon" title="opportunities">
          <slot name="opportunities" />
        </Slide>

        <Slide :icon="WarningIcon" title="threats">
          <slot name="threats" />
        </Slide>
      </swiper-container>
    </ClientOnly>
  </PageSection>

</template>

<style scoped lang="postcss">
:deep(.title) {
  @apply text-7xl lg:text-9xl lg:pt-24
}

:deep(p) {
  @apply my-2;
}

:deep(strong) {
  @apply font-semibold text-white;
}
</style>