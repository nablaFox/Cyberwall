<script setup lang="ts">
defineProps<{
  icon: string
  info?: string
  icons?: string[]
  type?: 'mailto' | 'tel'
  color?: string
}>()
</script>

<template>

  <div class="flex flex-col items-center gap-5 cursor-pointer">
    <Icon
      class="transition-all duration-500 ease-in-out hover:-translate-y-2"
      :class="color || 'text-blue'"
      :name="icon" 
      size="60" 
    />

    <div class="w-full border-t-2 pt-4 border-gray">
      <a v-if="info" 
      :href="`${type}:${info}`" 
      :class="`hover:${color || 'text-blue'} duration-500 transition-colors`"
      >
        {{ info }}
      </a>
  
      <div v-else-if="icons" class="flex gap-5">
        <Icon 
          v-for="icon in icons" 
          :key="icon"
          :name="icon" 
          size="24" 
        />
      </div>
    </div>
  </div>

</template>