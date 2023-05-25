<script setup lang="ts">
import { useData } from 'vitepress'
import NavLink from './NavLink.vue'

defineProps<{
  open: boolean 
}>()

const { theme } = useData()
</script>

<template>
  <Transition name="fade">
    <div 
      v-if="open" 
      class="bg-purple font-thin z-10 fixed w-full p-page pt-1 flex flex-col gap-3 items-start !pb-6"
    >
      <template v-for="item in theme.nav" :key="item.text">
        <NavLink v-if="'link' in item" :item="item" />
        <NavLink 
          v-else 
          v-for="subItem in item.items" 
          :item="subItem" 
        />
      </template>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, 
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>