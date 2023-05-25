<script setup lang="ts">
import { useData } from 'vitepress'

import Image from './Image.vue'
import NavLink from './NavLink.vue'
import Flyout from './Flyout.vue'
import NavHamburger from './NavHamburger.vue'

defineProps<{ 
  isScreenOpen: boolean 
}>()

defineEmits<{
  (e: 'toggle-screen'): void
}>()

const { theme, site } = useData()
</script>

<template>
   <div class="section !my-0 py-5 flex justify-between items-center">
    <a href="/" class="flex items-center gap-3">
      <Image v-if="theme.logo" :image="theme.logo" alt="logo" width="65" />
      <div class="font-sol text-2xl"> {{ site.title }} </div>
    </a>

    <nav class="hidden md:flex gap-5 px-7 font-thin">
      <template v-for="item in theme.nav" :key="item.text">
        <NavLink v-if="'link' in item" :item="item" />
        <Flyout v-else :button="item.text" :items="item.items" />
      </template>
    </nav>

    <NavHamburger :active="isScreenOpen" @click="$emit('toggle-screen')" />
  </div>
</template>