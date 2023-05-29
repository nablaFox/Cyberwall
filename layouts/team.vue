<script setup lang="ts">
// query all the files in pcto folder, except index.md
const pages = await queryContent('pcto').without('_').skip(1).find()
</script>

<template>
  <NuxtLayout name="default">
    <Sidebar :items="pages" />
    <slot />
  </NuxtLayout>
</template>