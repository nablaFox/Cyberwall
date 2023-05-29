<script setup lang="ts">
export interface SidebarItem {
  title?: string
  path?: string
}

defineProps<{
  items: SidebarItem[]
}>()
</script>


<template>
  <div>
    <div v-for="item in items">
      <NuxtLink :to="item.path">
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>


<style scoped lang="postcss">



</style>