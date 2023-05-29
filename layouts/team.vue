<script setup lang="ts">
import Default from './default.vue'

const { page } = useContent()
</script>

<template>
  <Default>
    <div class="z-[999]">
      <nav> teaam </nav>
      <slot />
    </div>
  </Default>
  
</template>