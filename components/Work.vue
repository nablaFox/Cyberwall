<script setup lang="ts">
import TabletWork from './TabletWork.vue'
import ComputerWork from './ComputerWork.vue'
import LayersWork from './LayersWork.vue'

export interface WorkProps {
  title?: string
  heading?: string
  description?: string
  link?: string
  cta?: string
  asset?: 'Tablet' | 'Computer'
  activeImage?: string[]
}

defineProps<WorkProps>()

const active = ref(false)

const assetMap = {
  Tablet: TabletWork,
  Computer: ComputerWork,
  Layers: LayersWork
}
</script>

<template>

  <div 
    class="work mx-auto py-[37px] px-[30px] rounded-2xl border-2 border-white-1 transition-[box-shadow] duration-500 overflow-hidden flex flex-col"
    @mouseleave="active = false"
    @mouseenter="active = true"
    @click="active = true"
  >
    <div class="absolute w-full h-full overlay hidden max-[990px]:block left-0 top-0 z-10" />
    <div class="max-w-none md:max-w-[440px] z-20">
      <h6 class="uppercase font-thin tracking-[3px] text-xl"> 
        {{ heading }}
      </h6>

      <TextGradient class="break-words my-[20px] text-[40px] capitalize font-bold leading-[1] inline-block" as="h1">
        {{ title }}
      </TextGradient>
      
      <p class="max-[990px]:mb-10 mt-[10px] text-lg sm:text-xl"> 
        <span v-html="description"></span>
      </p>
    </div>

    <component
      v-if="asset"
      class="work-asset absolute will-change-transform right-0 bottom-0"
      :is="assetMap[asset]"
      :active="active"
      :activeImage="activeImage"
    />

    <CwButton :href="link" theme="outlined" size="big" class="max-sm:mb-4 z-20"> 
      {{ cta || 'Invia il tuo CV' }}
    </CwButton>
  </div>

</template>

<style scoped lang="postcss">
.work {
  &:hover,
  &:focus {
    box-shadow: 0 0 86px 6px rgba(112,20,210,.5);
  }

  @apply h-[40vw] max-h-[577px] w-4/5 items-start justify-between;

  @media screen and (max-width: 1328px) {
    @apply w-[76%]
  }
  
  @media screen and (max-width: 990px) {
    @apply min-h-[710px] h-auto justify-end w-[90%];
  }

  @media screen and (max-width: 500px) {
    @apply w-full
  }
}

.btn {
  @apply border-white-1;
  &:hover { @apply border-purple-1 }
}

.overlay {
  background-color: rgba(16, 12, 8, 0.1);
  background: linear-gradient(0deg, rgba(16, 12, 8, 0.8), hsla(0, 0%, 100%, 0));
}

.work-asset {
  @media screen and (max-width: 980px) {
    @apply top-0 bottom-auto;
  }
}
</style>