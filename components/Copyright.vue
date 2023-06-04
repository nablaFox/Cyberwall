<script setup lang="ts">
const { theme } = useTheme()
</script>

<template>
  <div class="pt-4 flex items-center text-xs justify-between text-grey-1 border-t border-gray break-words">
    <div class="max-w-[300px] mr-4"> 
      {{ theme.footer?.message }} 
    </div>

    <div> {{ theme.footer?.copyright }} </div>
  </div>
</template>