<script setup lang="ts">
defineProps<{
  gap?: string
}>()
</script>

<template>
  <section 
    class="section flex flex-col items-center justify-between gap-[30px] lg:flex-row md:gap-12"
    :style="{ gap }"
  >
    <div class="left">
      <slot name="left" />
    </div>

    <div class="right">
      <slot name="right" />
    </div>
  </section>
</template>
