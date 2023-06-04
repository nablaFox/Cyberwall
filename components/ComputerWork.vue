<script setup lang="ts">
defineProps<{
  active: boolean
  activeImage?: string[]
}>()
</script>

<template>
  
  <div class="computer-station w-3/5 h-[90%]">
    <WorkImage 
      class="circles w-[105%] bottom-[3%] right-[-2%]"
      shape="circles-shape.png"
      activeShape="circles-s-active.svg"
      :active="active"
    />

    <WorkImage
      class="computer right-[5%] bottom-[15%] w-[77%]"
      shape="computer-shape.svg"
      activeShape="computer-s-active.svg"
      :activeImage="activeImage?.[0]"
      :active="active"
    />

    <WorkImage 
      class="keyboard right-[55%] bottom-[7%] w-2/5"
      shape="keyboard-shape.svg"
      activeShape="keyboard-s-active.svg"
      :active="active"
    />

    <WorkImage
      class="phone right-[79%] bottom-[36%] w-[28%]"
      shape="phone-shape.svg"
      activeShape="phone-s-active.svg"
      :activeImage="activeImage?.[1]"
      :active="active"
    />
  </div>

</template>

<style scoped lang="postcss">
.computer-station {
  @media screen and (max-width: 990px) {
    width: 92%;
    height: 71vw;
  }

  @media screen and (max-width: 767px) {
    height: 83vw;
  }
}

.phone :deep(.active-image) {
  transform: rotate(60deg) skew(0deg,-30deg);
  right: 33%;
  bottom: -7%;
  width: 34%;
  height: 117%;
}

.computer :deep(.active-image) {
  transform: skew(0deg,30deg);
  right: 2.6%;
  bottom: 28.2%;
  width: 97.3%;
  height: 48.5%;
}
</style>