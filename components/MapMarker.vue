<script setup lang="ts">
import { MarkerOptions, LngLatLike } from 'mapbox-gl'

const props = withDefaults(defineProps<{ 
  markerId: string, 
  options?: MarkerOptions, 
  lnglat: LngLatLike
}>(), {options: () => ({})})

const markerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  defineMapboxMarker(props.markerId, props.options, markerRef, (marker) => {
    marker?.setLngLat(props.lnglat)
  })
})
</script>

<template>
   <div class="relative w-[60px] h-[60px]" ref="markerRef">
      <span class="circle" />
    </div>
</template>

<style scoped lang="postcss">
.circle {
  @apply abs-center w-full h-full border-white border-[15px] rounded-full opacity-0 z-10;
  animation: expand 2s ease-out infinite;
}

@keyframes expand {
  0% {
    transform: scale(0.1);
    border-width: 15px;
    opacity: 0;
  }
  50% {
    opacity: 1
  }
  100% {
    transform: scale(1.2);
    border-width: 1px;
    opacity: 0;
  }
}
</style>