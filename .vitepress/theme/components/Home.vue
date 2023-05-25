<script setup lang="ts">
import { useData } from 'vitepress'
import Hero from './Hero.vue'
import Solutions from './Solutions.vue'
import Services from './Services.vue'
import AboutHome from './AboutHome.vue'

const { frontmatter: fm } = useData()
</script>

<template>

  <Hero 
    v-if="fm.hero"
    :text="fm.hero.text"
    :cta="fm.hero.cta"
    :background="fm.hero.background"
  />

  <Solutions
    v-if="fm.solutions && fm.solutions.items"
    :section="fm.solutions.section"
    :items="fm.solutions.items"
    :cta="fm.solutions.cta"
  />

  <Services
    v-if="fm.services && fm.services.items"
    :section="fm.services.section"
    :items="fm.services.items"
  />

  <Content />
</template>