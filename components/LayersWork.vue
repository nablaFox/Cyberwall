<script setup lang="ts">
defineProps<{
  active: boolean
  activeImage?: string[]
}>()
</script>

<template>
  
  <div class="layers w-[60%] h-[90%]">
    <WorkImage 
      class="layer-1 right-[1.5%] bottom-[19%] w-[110%] z-[1]"
      :class="{ active }"
      shape="layer-shape.png"
      active-shape="layer-s-active.png"
      :active="active"
    />

    <WorkImage
      class="screen right-0 bottom-[13%] w-[113%]"
      :class="{ active }"
      shape="screen-shape.png"
      active-shape="screen-s-active.png"
      :activeImage="activeImage?.[0]"
      :active="active"
    />

    <WorkImage 
      class="layer-2 bottom-[6%] w-[113%] right-0 -z-[1]"
      shape="layer-shape.png"
      active-shape="layer-s-active.png"
      :active="active"
    />
  </div>

</template>

<style scoped lang="postcss">
.layers {
  @media screen and (max-width: 990px) {
    width: 92%;
    height: 71vw;
  }

  @media screen and (max-width: 767px) {
    height: 83vw;
  }
}


:deep(.active-image) {
  transform: rotate(60deg) skew(0deg,-30deg);
  right: 32.2%;
  bottom: -9.5%;
  width: 36%;
  height: 124.9%;
  border-radius: 21px;
  filter: hue-rotate(0deg);
}

.layer-1,
.screen {
  @apply transition-transform duration-500 ease-in-out
}

.layer-1 {
  transform: translate3d(0px, -18.4917%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);

  &.active {
    transform: translate3d(0px, -14.044%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

.screen {
  transform: translate3d(0px, -4.1765%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  
  &.active {
    transform: translate3d(0px, -2.3456%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}
</style>