<script setup lang="ts">
defineProps<{ 
  open: boolean 
}>()

const { theme } = useTheme()
</script>

<template>
  <Transition name="fade">
    <div 
      v-if="open" 
      class="font-thin z-10 fixed w-full p-page pt-1 flex flex-col gap-3 items-start !pb-6"
      :style="{ backgroundColor: 'var(--background-color)' }"
    >
      <template v-for="item in theme.nav" :key="item.text">
        <NavLink 
          v-if="'items' in item"
          v-for="subItem in item.items" 
          :item="subItem"
        />
        <NavLink v-else :item="item" />
      </template>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, 
.fade-leave-active {
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>