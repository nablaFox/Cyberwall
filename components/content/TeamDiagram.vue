<script setup lang="ts">
import type { DiagramBlock } from '../DiagramBlock.vue'

defineProps<{
  functions: DiagramBlock[]
  organization: DiagramBlock[]
}>()

const checked = ref(true)
const container = ref<HTMLElement | null>(null)

const onChange = () => { 
  if (!container.value) return

  const offset = -100
  const y = container.value.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top: y })
}
</script>

<template>

  <div class="max-lg:overflow-x-scroll relative" ref="container">
    <div class="min-w-[1000px] mb-16">
      <template v-if="checked">
        <DiagramBlock v-for="block in functions" v-bind="block" :key="$route.path" />
      </template>

      <template v-else>
        <DiagramBlock v-for="block in organization" v-bind="block" :key="$route.path" />
      </template>
    </div>
    
    <Switch 
      v-model="checked" 
      gradient="pink-to-orange"
      :options="['Organigramma', 'Funzionigramma']" 
      @change="onChange"
    />
  </div>

</template>