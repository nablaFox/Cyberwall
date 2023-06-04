<script setup lang="ts">
defineProps<{
  logo?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="mb-10"> 
    <div class="flex items-center mb-6">
      <Image
        v-if="logo"
        :src="logo"
        class="w-[90px] h-[90px] object-cover mr-1" 
      />
      <div class="h-full">
        <div class="font-sol text-3xl"> 
          {{ title }} 
        </div>
        <div 
          v-if="description" 
          class="mt-3 text-[14px] font-medium capitalize"
          :class="logo ? 'ml-3' : 'ml-2'"
        > 
          {{ description }} 
        </div>
      </div>
    </div>
  </div>
</template>