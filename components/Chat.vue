<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

defineProps<{
  headerTitle?: string
  firstMessage?: string
  botIcon?: string
  chatControlsPlaceholder?: string
  chatControlsSendIcon?: string
}>()

defineEmits(['exit'])

const { send, chat } = useChat()

const container = ref<HTMLElement | null>(null)
const { width } = useWindowSize()
const { scroll } = useScrollTo(container, { offset: -100 })

onMounted(() => {
  scroll()
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
})

watch(width, scroll)
</script>

<template>

  <div class="flex flex-col justify-between overflow-hidden max-w-[850px] 2xl:max-w-[1000px] mx-auto h-[calc(100vh-120px)]" ref="container">
    <ChatHeader 
      :title="headerTitle" 
      @exit="$emit('exit')"
    />

    <div class="flex flex-col gap-4 overflow-y-scroll pt-20 md:pt-[74px] scrollbar pr-6 mb-6">
      <ChatMessage role="assistant" :content="firstMessage"  :botIcon="botIcon" />
      <ChatMessage 
        v-for="message, i in chat"
        v-bind="message" 
        :botIcon="botIcon" 
        :key="i"
      />
    </div>

    <ChatControls
      :sendIcon="chatControlsSendIcon"
      :placeholder="chatControlsPlaceholder"
      @send="send" 
    />
  </div>
 
</template>