<script setup lang="ts">
const chatOpen = ref(false)
const formOpen = ref(false)

defineProps<{
  chat: any
  form: any
}>()

watch([chatOpen, formOpen], () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 0)
})
</script>

<template>
  <PageSection>
    <ContactHome 
      v-if="!chatOpen && !formOpen"
      v-bind="$props" 
      @open-chat="chatOpen = true" 
      @open-form="formOpen = true"
    >
      <template #left> <slot name="left" /> </template>
      <template #right> <slot name="right" /> </template>
    </ContactHome>
    <Chat v-if="chatOpen" />
    <CwForm v-if="formOpen" v-bind="form" />
  </PageSection>
</template>