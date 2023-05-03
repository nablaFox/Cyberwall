<script setup lang="ts">

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

const footerItems = [
  { title: 'Contact', items: [
    { text: 'Adapt Digital Ltd' },
    { text: 'Ferneberga House' },
    { text: 'Alexandra Road' },
    { text: 'Farnborough' },
    { text: 'GUI14 6DQ' }
  ]},
  { title: 'Connect', items: [
    { text: 'hello@cyberwall.com', link: '/' },
    { text: '+44 (0)330 133 0770', link: '/' }
  ]},
  { title: 'Small Print', items: [
    { text: 'Privacy Policy', link: '/' },
    { text: 'Terms & Conditions', link: '/' },
    { text: 'Terms & Conditions', link: '/' },
    { text: 'Terms & Conditions', link: '/' },
  ]}
]

const brand = 'CyberWall'
const logo = (await useAsset('logo.svg')).src
</script>

<template>
  <Header
    :brand="brand" 
    :logo="logo"
    :nav-items="navItems"
  />
  <main class="overflow-hidden">
    <slot />
  </main>
  <Footer
    slogan="a cyber security center"
    :brand="brand"
    :items="footerItems"
    :logo="logo"
    copyright="© 2023 Adapt Digital Ltd. All rights reserved"
    legalWritings="Adapt Digital Ltd is a company registered in England and Wales. Company number: 12345678"
  />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>