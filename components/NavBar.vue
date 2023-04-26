<script setup lang="ts">
import type { NavItem } from '@/types'

defineProps<{ 
  items: NavItem[]
  isScreenOpen: boolean 
}>()

defineEmits<{
  (e: 'toggle-screen'): void
}>()
</script>

<template>
  <div class="section !my-0 py-5 flex justify-between items-center">
    <NuxtLink to="/" class="flex items-center gap-3">
      <img src="~/assets/images/logo.svg" alt="logo" width="65">
      <div class="font-sol text-2xl"> Cyberwall </div>
    </NuxtLink>

    <nav class="hidden md:flex gap-5 px-7 font-thin">
      <template v-for="item in items" :key="item.text">
        <NavLink v-if="'link' in item" :item="item" />
        <Flyout v-else :button="item.text" :items="item.items" />
      </template>
    </nav>

    <NavHamburger :active="isScreenOpen" @click="$emit('toggle-screen')" />
  </div>
</template>