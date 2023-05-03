<script setup lang="ts">
const { 
  navItems,
  footerItems,
  brand,
  logo,
  slogan,
  copyright,
  legalWritings
 } = useContent().globals.value.theme

const logoUrl = (await useAsset(logo)).src
</script>

<template>
  <Header
    :brand="brand" 
    :logo="logoUrl"
    :nav-items="navItems"
  />
  <main class="overflow-hidden">
    <slot />
  </main>
  <Footer
    :slogan="slogan"
    :brand="brand"
    :items="footerItems"
    :logo="logoUrl"
    :copyright="copyright"
    :legalWritings="legalWritings"
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