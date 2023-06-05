<script setup lang="ts">
import type { Service } from '../Service.vue'

defineProps<{
  services: Service[]
}>()
</script>

<template>
  <PageSection class="pt-6">
    <Service
      v-for="service in services"
      v-bind="service" 
    />
    <slot />
  </PageSection>
</template>

<style scoped lang="postcss">
:deep(.service) { @apply mt-[75px] mb-[120px] }

:deep(.title) { @apply mb-[120px] }

:deep(.section-wrapper) {
  @apply flex flex-wrap justify-between items-center max-w-[1040px] mx-auto pt-5
}
</style>