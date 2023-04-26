<script lang="ts" setup>
defineProps<{ active: boolean }>()
</script>

<template>
  <button
    type="button"
    class="md:hidden justify-center items-center w-8 h-6 flex"
    :class="{ active }"
  >
    <span class="h-full w-full">
      <span class="top" />
      <span class="middle" />
      <span class="bottom" />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
.top,
.middle,
.bottom {
  @apply absolute w-full h-[2px] bg-white rounded-sm;
  transition: top .25s, background-color .2s, transform .25s;
}

.top    { top: 0; left: 0; }
.middle { top: 10px; left: 0; }
.bottom  { top: 20px; left: 0; }

.active {
  .top    { top: 10px; transform: rotate(45deg); }
  .middle { background-color: transparent; }
  .bottom { top: 10px; transform: rotate(-45deg); }
}
</style>