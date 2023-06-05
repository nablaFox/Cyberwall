<script setup lang="ts">
export interface FooterItem {
  text: string
  link?: string
}

defineProps<{
  text?: string
  items: FooterItem[]
}>()
</script>

<template>

  <div class="w-full sm:w-1/2 md:w-auto mb-5 ">
    <h3 class="text-bg purple-to-pink uppercase font-semibold mb-2"> 
      {{ text }} 
    </h3>

    <component 
      v-for="item, i in items" :key="i"
      class="text-sm font-light text-grey-1 block mb-1"
      :is="item.link ? 'a' : 'div'" 
      :href="item.link"
    >
      {{ item.text }}
    </component>
  </div>

</template>

<style scoped lang="postcss">
a {
  @apply transition-colors duration-300;
  &:hover { @apply text-purple-1 }
}
</style>