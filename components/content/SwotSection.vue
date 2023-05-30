<script setup lang="ts">
import DeviseIcon from '../icons/DeviseIcon.vue'
import QuestionIcon from '../icons/QuestionIcon.vue'
import TrophyIcon from '../icons/TrophyIcon.vue'
import WarningIcon from '../icons/WarningIcon.vue'

defineProps<{
  strengths?: string
  weaknesses?: string
  opportunities?: string
  threats?: string
  [key: string]: any
}>()

const swot = [
  { icon: TrophyIcon, title: 'strengths' },
  { icon: QuestionIcon, title: 'weaknesses' },
  { icon: DeviseIcon, title: 'opportunities' },
  { icon: WarningIcon, title: 'threats' }
]
</script>

<template>

  <PageSection class="pb-24" no-margin>
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
  @apply text-7xl lg:text-9xl lg:pt-24
}
</style>