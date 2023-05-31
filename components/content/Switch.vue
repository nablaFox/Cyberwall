<script setup lang="ts">
defineProps<{
  gradient?: string
  options?: string[]
  icons?: string[]
  id?: string
  modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue', 'change'])

const onChange = (event: Event) => {
  emit('change')
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <div class="flex gap-2">
    <div class="cursor-pointer w-11 h-4 rounded-lg" :class="[gradient || 'purple-to-pink']">
      <input 
        class="opacity-0 absolute w-full h-full z-10 cursor-[inherit]"
        type="checkbox"
        :id="id" 
        :value="modelValue"
        :checked="modelValue"
        @change="onChange"
      />
  
      <span class="rounded-full bg-white w-[20px] h-[20px] inline-block abs-center-y right-[calc(100%-20px)] transition-all" ref="ball" />
    </div>

    <span class="text-sm font-semibold">
      {{ modelValue ? options?.[1] : options?.[0] }}
    </span>
  </div>
</template>

<style scoped lang="postcss">
input[value="true"] + span {
  @apply right-0
}
</style>