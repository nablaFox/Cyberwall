<script setup lang="ts">
const props = defineProps<{ 
  src: string 
  alt?: string
}>()

const { src } = await useAsset(props.src)
</script>

<template>
  <img :src="src" :alt="alt || 'image'">
</template>