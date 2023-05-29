<script setup lang="ts">
const title = useRoute().path.replace('/', '')
</script>

<template>
  <NuxtLayout name="default">
    <PageSection 
      class="max-w-[900px]" 
      no-gradient 
      title-animation="none"
      :title="title"
    >
      <slot />
    </PageSection>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
:deep(.title) {
  @apply !text-[40px] font-semibold first-letter:capitalize mb-12
}

:deep(h1) {
  @apply font-bold text-3xl
}

:deep(p) {
  @apply my-4;
  &:not(:first-child) { @apply mt-12 }
}
</style>



