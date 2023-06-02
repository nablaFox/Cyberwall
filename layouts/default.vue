<script setup lang="ts">
const footer = ref(true)
const header = ref(true)

const showFooter = () => footer.value = true
const showHeader = () => header.value = true
const hideFooter = () => footer.value = false
const hideHeader = () => header.value = false

provide('footer', {
  show: showFooter,
  hide: hideFooter,
  visible: footer
})

provide('header', {
  show: showHeader,
  hide: hideHeader,
  visible: header
})
</script>

<template>
  <div>
    <CwHeader v-if="header" />
    <main class="overflow-hidden">
      <slot />
    </main>
    <CwFooter v-if="footer" />
  </div>
</template>