<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  image: 
    | string
    | { src: string, alt?: string }
}>()
</script>

<template>
  <img
    :src="withBase(typeof image === 'string' ? image : image.src)"
    :alt="(typeof image === 'string' ? '' : image.alt) || ''"
  />
</template>