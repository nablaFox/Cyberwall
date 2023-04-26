<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const { isScreenOpen, toggleScreen } = useNav()

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'Chi Siamo', link: '/about'},
  { text: 'Soluzioni', items: [
    { text: 'soluzione', link: '/solutions/1' },
    { text: 'soluzione', link: '/solutions/2' },
    { text: 'soluzione', link: '/solutions/3' }
  ]},
  { text: 'Il team', link: '/pcto' },
  { text: 'Contatti', items: [
    { text: 'Posizione', link: '/contacts/1' },
    { text: 'Supporto', link: '/contacts/2' }
  ]}
]
</script>

<template>
  <header 
    class="fixed w-full transitions-colors ease duration-300 z-10"
    :class="[y !== 0 || isScreenOpen ? 'bg-purple' : 'bg-transparent']"
  >
    <NavBar 
      :is-screen-open="isScreenOpen"
      :items="navItems" 
      @toggle-screen="toggleScreen" 
    />
    <NavScreen
      :items="navItems" 
      :open="isScreenOpen" 
    />
  </header>
</template>