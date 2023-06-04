<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const { isScreenOpen, toggleScreen } = useNav()
</script>

<template>
  <header 
    class="fixed w-full transition-colors ease duration-[500ms] z-50"
    :style="{ backgroundColor: y !== 0 || isScreenOpen ? 'var(--background-color)' : 'transparent' }"
  >
    <NavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <NavScreen :open="isScreenOpen" />
  </header>
</template>