<script setup lang="ts">
defineProps<{
  chat?: {
    title: string
    cta: string
    icon: string
  }
  form?: {
    cta: string
  }
}>()

defineEmits(['openForm'])
</script>

<template>
  <div class="flex max-[1100px]:items-center max-[1100px]:gap-8 flex-col min-[1100px]:flex-row justify-between ">
    <div class="left">
      <slot name="left" />
      {{ form?.cta }} 
      <CwButton theme="waterfall" @click="$emit('openForm')"> 
        questionario 
      </CwButton>
    </div>
  
    <div class="right" data-aos="fade-left" data-aos-delay="300">
      <TextGradient 
        v-if="chat?.title"
        gradient="blue-to-pink" 
        class="text-2xl inline-block mb-2" 
        as="h2"
      >
        {{ chat.title }}
      </TextGradient>
      
      <slot name="right" />
  
      <div class="mt-8 flex gap-4">
        <CwButton theme="outlined" to="/copilot"> 
          {{ chat?.cta }} 
        </CwButton>
        <Icon v-if="chat?.icon" :name="chat.icon" size="30" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.left,
.right {
  @apply max-w-[500px]
}

:deep(p):not(:last-child) {
  @apply mb-8
}
</style>
