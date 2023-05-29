<script setup lang="ts">
const { page, layout } = useContent()

if (!(page as any).value && process.server) {
  const event = useRequestEvent()
  event.node.res.statusCode = 404
}

useContentHead(page)
</script>

<template>
  <NuxtLayout :name="layout || 'default'">
    <Transition name="page">
      <ContentRenderer v-if="page" :key="(page as any)._id" :value="page" />
    </Transition>
  </NuxtLayout>
</template>

<style scoped lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>