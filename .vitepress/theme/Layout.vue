<script setup lang="ts">
import { useData } from 'vitepress'
const { page, frontmatter } = useData()

import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import NotFound from './components/NotFound.vue'
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="layout overflow-hidden">
    <Header />
    <NotFound v-if="page.isNotFound" />
    <Home v-else-if="frontmatter.layout === 'home'" />
    <Footer />
  </div>

  <Content v-else />
</template>
