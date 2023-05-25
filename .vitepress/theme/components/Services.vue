<script setup lang="ts">
import type { Service as ServiceType } from './Service.vue'
import type { PageSection as Section } from './PageSection.vue'
import PageSection from './PageSection.vue'
import Service from './Service.vue'

export interface Services {
  items: ServiceType[]
  section?: Section
}

defineProps<Services>()
</script>

<template>
  <PageSection
    v-bind="section"
    class="max-w-[1040px] pt-20]"
  >
    <Service
      v-for="service in items"
      v-bind="service" 
    />
    <slot />
  </PageSection>
</template>

<style scoped lang="postcss">
:deep(.service) { @apply mt-[75px] mb-[120px] }

:deep(.section-wrapper) {
  @apply flex flex-wrap justify-between items-center max-w-[1040px] mx-auto pt-5
}
</style>