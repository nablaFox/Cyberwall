<script setup lang="ts">
import type { NavItemWithLink } from '~/types'

defineProps<{
  items: NavItemWithLink[]
  gradient?: string
}>()

const showAll = ref(false)
const clicked = ref(false)

// AOS bug fix
const setClick = () => {
  clicked.value = true
  setTimeout(() => {
    clicked.value = false
  }, 500)
}
</script>

<template>

  <nav class="w-[250px] flex flex-col items-start gap-2" @click="setClick">
    <template v-for="item, i in items">
      <NavLink 
        v-if="showAll || i < 5"
        class="text-[28px] font-normal pb-[2px]"
        :data-aos="!clicked ? 'fade-right' : 'fade-in'"
        :item="item"
        :gradient="gradient"
        :data-aos-delay="i * 100"
      />
    </template>

    <button class="mt-4" @click="showAll = !showAll; clicked=true"> 
      {{ showAll ? 'Mostra meno' : 'Mostra tutti' }}
      <Icon 
        name="ic:outline-keyboard-arrow-down"
        size="18px"
        :class="{ 'transform rotate-180': showAll }"
      />
    </button>
  </nav>

</template>

<style scoped lang="postcss">
:deep(.nav-link) {
  &:hover .underline { @apply w-0 }
  .underline { @apply h-[2px] }
}
</style>