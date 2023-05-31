<script setup lang="ts">
defineProps<{
  exitMessage?: string[]
  contacts: any[]
}>()
</script>

<template>
  <div class="text-center">
    <div class="mb-40">
      <TextGradient 
        gradient="blue-to-pink inline-block mb-5" 
        class="text-5xl" 
        as="h2"
      >
        {{ exitMessage?.[0] }}
      </TextGradient>
  
      <h3 class="text-3xl capitalize">
        {{ exitMessage?.[1] }}
      </h3>
    </div>

    <div class="flex justify-between max-w-[800px] mx-auto">
      <Contact 
        v-for="contact, i in contacts" 
        :key="contact.icon" 
        :icon="contact.icon" 
        :info="contact.info" 
        :icons="contact.icons"
      />
    </div>
  </div>
</template>