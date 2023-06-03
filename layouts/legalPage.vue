<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <NuxtLayout name="default">
    <PageSection no-gradient title-animation="none" :title="page.title">
      <slot />
    </PageSection>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
:deep(.title) {
  @apply !text-[40px] font-semibold first-letter:capitalize mb-12 pt-12
}

:deep(h1) {
  @apply font-bold text-3xl mb-8;
  &:not(:first-child) { @apply mt-8 }
}

:deep(h2) {
  @apply font-medium text-xl mt-3 capitalize
}

:deep(p) {
  @apply my-4;
}

:deep(.section-wrapper) {
  @apply max-w-[900px]
}

:deep(li)::marker {
  @apply text-purple-2 font-medium;

  & > ul {
    @apply ml-5 mt-2
  }

  & > ol {
    @apply ml-5 mt-2
  }
}

:deep(ol) + ul {
  @apply ml-5
}
</style>



