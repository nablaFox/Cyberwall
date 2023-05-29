<script setup lang="ts">
export interface SidebarItem {
  text?: string
  path?: string
}

defineProps<{
  items: SidebarItem[]
}>()
</script>


<template>
  <div>
    <div v-for="item in items">
      
    </div>
  </div>
</template>


<style scoped lang="postcss">



</style>