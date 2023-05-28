<script setup lang="ts">
defineProps<{
  isScreenOpen: boolean
}>()

const { theme } = useTheme()
</script>

<template>
  <div 
    class="section !my-0 py-6 flex justify-between items-center"
    :class="[theme.logo && 'py-[14px]']"
  >
    <NuxtLink to="/" class="flex items-center gap-3">
      <Image v-if="theme.logo" :src="theme.logo" alt="logo" width="65"/>
      <div class="font-sol text-2xl"> {{ theme.title }} </div>
    </NuxtLink>

    <nav class="hidden lg:flex gap-5 px-7 font-thin">
      <template v-for="item in theme.nav" :key="item.text">
        <Flyout v-if="'items' in item" :button="item.text" :items="item.items" />
        <NavLink v-else :item="item" />
      </template>
    </nav>

    <NavHamburger class="lg:hidden" :active="isScreenOpen" @click="$emit('toggle-screen')" />
  </div>
</template>