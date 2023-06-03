<script setup lang="ts">
import type { DiagramBlock } from '../DiagramBlock.vue'

defineProps<{
  functions: DiagramBlock[]
  organization: DiagramBlock[]
}>()

const checked = ref(true)
const container = ref<HTMLElement | null>(null)

const { scroll } = useScrollTo(container, { offset: -100 })
</script>

<template>

  <div class="pb-4">
    <div class="max-lg:overflow-x-scroll relative mb-6" ref="container">
      <div class="min-w-[1000px] mb-16">
        <template v-if="checked">
          <DiagramBlock v-for="block in functions" v-bind="block" :key="$route.path" />
        </template>
  
        <template v-else>
          <DiagramBlock v-for="block in organization" v-bind="block" :key="$route.path" />
        </template>
      </div>
    </div>
  
    <Switch 
      v-model="checked" 
      gradient="pink-to-orange"
      :options="['Organigramma', 'Funzionigramma']" 
      @change="scroll"
    />
  </div>

</template>