<script setup lang="ts">
defineProps<{
  headerTitle?: string
  firstMessage?: string
  botIcon?: string
  controlsPlaceholder?: string
  controlsSendIcon?: string
}>()

const { send, chat } = useChat()
const { hide } = inject('footer') as any
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
})

onBeforeMount(hide)
</script>

<template>

  <PageSection>
    <div class="flex flex-col justify-between overflow-hidden max-w-[800px] 2xl:max-w-[1000px] mx-auto h-[calc(100svh-120px)]">
      <ChatHeader 
        :mobile="isMobile"
        :title="headerTitle" 
        @exit="$emit('exit')"
      />
  
      <div class="flex flex-col gap-4 overflow-y-scroll pt-20 md:pt-[74px] scrollbar pr-6 mb-6 test" :class="isMobile && 'scrollbar-none !pr-0'">
        <ChatMessage role="assistant" :content="firstMessage" :botIcon="botIcon" />
        <ChatMessage 
          v-for="message, i in chat"
          v-bind="message" 
          :botIcon="botIcon" 
          :key="i"
        />
      </div>
  
      <ChatControls
        :sendIcon="controlsSendIcon"
        :placeholder="controlsPlaceholder"
        @send="send" 
      />
    </div>
  </PageSection>
 
</template>