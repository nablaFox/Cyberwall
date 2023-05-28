<script setup lang="ts">
export interface Service {
  name: string
  icon: string
  blob?: string
  blobPos?: number
  description?: string
}

const props = defineProps<Service>()
const iconComponent = defineAsyncComponent(() => import(`./icons/${props.icon}Icon.vue`))
</script>

<template>
  <div 
    class="service text-center px-8 w-full max-w-[400px] md:w-1/2 md:max-w-[unset] mx-auto"
    data-aos="fade-in"
    data-aos-delay="200"
  >
    <div class="h-[105px]">
      <Image
        v-if="blob" 
        :src="blob" 
        :class="`absolute -translate-x-2/4 pos-${blobPos || 1}`"
      />

      <component :is="iconComponent" />
    </div>
    <div>
      <h3 class="font-semibold text-[26px] my-3">
        {{ name }}
      </h3>
      <p v-if="description"> 
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.pos-1 { @apply left-[62%] top-[-80px] }
.pos-2 { @apply left-[39%] top-[-105px] }
.pos-3 { @apply left-[50%] top-[-105px] }
.pos-4 { @apply left-[45%] top-[-80px] }
</style>