<script setup lang="ts">
defineProps<{
  exitMessage?: string[]
  contacts: any[]
}>()
</script>

<template>
  <div class="text-center sm:max-lg:text-left sm:max-lg:ml-14">
    <div class="mb-20 md:mb-28">
      <TextGradient 
        gradient="blue-to-pink inline-block mb-5" 
        class="text-[40px] sm:text-5xl" 
        as="h2"
      >
        {{ exitMessage?.[0] }}
      </TextGradient>
  
      <h3 class="text-2xl sm:text-3xl capitalize">
        {{ exitMessage?.[1] }}
      </h3>
    </div>

    <div class="inline-flex md:flex flex-col max-md:items-center max-md:gap-12 md:flex-row justify-between max-w-[800px] md:mx-auto">
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