<script setup lang="ts">
const { theme } = useTheme()
</script>

<template>
  <footer class="section-wrapper mt-[150px]">
    <div class="flex-wrap flex items-start w-full justify-between border-b border-grey">
      <div class="flex items-center mb-10"> 
        <Image
          v-if="theme.logo"
          :src="theme.logo"
          class="w-[90px] h-[90px] object-cover" 
        />
        <div class="h-full ml-3">
          <div class="font-sol text-3xl"> 
            {{ theme.title }} 
          </div>
          <div 
            v-if="theme.description" 
            class="mt-3 text-[14px] font-medium capitalize"
            :class="theme?.logo ? 'ml-3' : 'ml-1'"
          > 
            {{ theme.description }} 
          </div>
        </div>
      </div>

      <div
        v-for="item in theme.footer?.items"
        :key="item.text"
        class="w-full sm:w-1/2 md:w-auto mb-5 "        
      >
        <h3 class="text-bg purple-to-pink uppercase font-medium mb-2"> 
          {{ item.text }} 
        </h3>

        <div
          v-for="subItem, i in item.items"
          :key="i"
        >
          <component 
            class="text-sm font-light text-grey-1"
            :is="subItem.link ? 'a' : 'div'" 
            :href="subItem.link"
          >
            {{ subItem.text }}
          </component>
        </div>
      </div>
    </div>

    <div class="pb-8 mt-10 flex text-xs justify-between text-grey-1">
      <div class="max-w-[400px]"> {{ theme.footer?.message }} </div>
      <div> {{ theme.footer?.copyright }} </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
a:hover {
  @apply text-purple-1 transition-colors duration-300
}
</style>