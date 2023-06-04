<script setup lang="ts">
defineProps<{
  active: boolean
  activeImage?: string[]
}>()
</script>

<template>
  
  <div class="tablet w-4/5 h-[90%] max-h-[507px]">
    <WorkImage 
      class="w-full right-[-17%] bottom-[6%]"
      shape="tablet-shape.png"
      active-shape="tablet-s-active.png"
      :active="active"
      :active-image="activeImage?.[0]"
    />
  </div>

</template>

<style scoped lang="postcss">
.tablet {
  @media screen and (max-width: 990px) {
    top: 4%!important;
    right: 4%;
    width: 90%;
    height: 60vw;
    max-height: 522px;
  }

  @media screen and (max-width: 767px) {
    height: 67vw;
  }
}

.work-image {
  @media screen and (max-width: 990px) {
    top: 0;
    right: -7vw;
    bottom: auto;
    width: 70vw;
  }

  @media screen and (max-width: 767px) {
    width: 90vw;
  }
}

:deep(.active-image) {
  transform: translate3d(0,0,1000px) rotateX(54deg) rotateY(0) rotateZ(-45.1deg);
  width: 73.5%;
  height: 92%;
  right: 13.3%;
  bottom: 4.8%;
}
</style>