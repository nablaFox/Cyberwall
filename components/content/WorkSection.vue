<script setup lang="ts">
import { WorkProps } from '../Work.vue'

defineProps<{
  works: WorkProps[]
}>()
</script>

<template>
  <PageSection>
    <Work
      v-for="work in works"
      :key="work.title"
      v-bind="work"
    />
  </PageSection>
</template>

<style scoped lang="postcss">
:deep(.section-wrapper) {
  @apply flex flex-col gap-20
}
</style>