<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <svg viewBox="0 0 787 722" class="absolute w-0 h-0">
    <defs>
      <clipPath id="clip" clipPathUnits="objectBoundingBox">
        <path d="M0,0.522 C0.005,0.375,0.112,0.292,0.303,0.15 C0.369,0.097,0.43,0.032,0.522,0.011 C0.578,0,0.645,0.037,0.715,0.105 C0.74,0.13,0.789,0.175,0.821,0.207 C0.939,0.325,1,0.366,0.999,0.455 C0.991,0.521,0.975,0.54,0.937,0.606 C0.904,0.664,0.883,0.69,0.854,0.764 C0.797,0.907,0.754,1,0.697,1 C0.622,1,0.533,0.957,0.423,0.911 C0.341,0.876,0.243,0.867,0.139,0.806 C0.049,0.756,-0.009,0.617,0,0.522" />
      </clipPath>
    </defs>
  </svg>

  <Image
    :src="image"
    class="blob-img object-cover w-full aspect-[1/1]"
    data-aos="fade-in"
  />
</template>

<style scoped lang="postcss">
.blob-img { clip-path: url('#clip') }
</style>