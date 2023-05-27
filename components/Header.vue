<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const { isScreenOpen, toggleScreen } = useNav()
</script>

<template>
  <header 
    class="fixed w-full transitions-colors ease duration-300 z-10"
    :class="[y !== 0 || isScreenOpen ? 'bg-purple' : 'bg-transparent']"
  >
    <NavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <NavScreen :open="isScreenOpen" />
  </header>
</template>