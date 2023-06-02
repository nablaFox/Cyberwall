<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

export interface ChatControls {
  placeholder?: string
  sendIcon?: string
}

withDefaults(defineProps<ChatControls>(), {
  placeholder: 'Invia un messaggio',
  sendIcon: 'carbon:send-filled',
})

const emit = defineEmits<{
  send: [input: string]
}>()

const { textarea, input } = useTextareaAutosize()

const onSend = () => {
  if (!input.value) return

  emit('send', input.value)
  input.value = ''
  console.log('flag')
}
</script>

<template>
  <form 
    class="flex w-full rounded-lg py-3 pl-4 border-gray border" 
    @submit.prevent="onSend"
  >
    <textarea
      class="max-h-[200px] h-6 w-full pr-12 scrollbar"
      ref="textarea"
      rows="1"
      :placeholder="placeholder"
      v-model="input"
      @keydown.enter.prevent="e => e.shiftKey ? input += '\n' : onSend()"  
    />

    <button
      class="absolute right-2 bottom-1 p-2 transition-colors duration-500"
      :class="input?.length > 0 && 'text-blue'"
      type="submit"
    >
      <Icon :name="sendIcon" size="24" />
    </button>
  </form>
</template>