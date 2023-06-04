<script setup lang="ts">
const { theme } = useTheme()
</script>

<template>
  <div class="flex-wrap flex items-start w-full justify-between">
    <FooterBrand 
      :logo="theme?.logo"
      :title="theme?.title"
      :description="theme?.description"
    />

    <FooterGroup
      v-for="item in theme.footer?.items"
      :key="item.text"
      :text="item.text"
      :items="item.items"
    />
  </div>
</template>