<script setup lang="ts">
const formOpen = ref(false)

defineProps<{
  chat: any
  form: any
}>()

watch(formOpen, () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 0)
})
</script>

<template>
  <PageSection>
    <ContactHome 
      v-if="!formOpen"
      v-bind="$props" 
      @open-form="formOpen = true"
    >
      <template #left> <slot name="left" /> </template>
      <template #right> <slot name="right" /> </template>
    </ContactHome>
    <CwForm v-if="formOpen" v-bind="form" />
  </PageSection>
</template>