<script setup lang="ts">
const { page, layout } = useContent()
const { theme } = useTheme()

if (!(page as any).value && process.server) {
  const event = useRequestEvent()
  event.node.res.statusCode = 404
}

// check if page is in pcto and it's not the main page
const pcto = computed(() => {
  const path = (page as any).value?._path
  return path?.startsWith('/pcto') && path !== '/pcto'
})

const pageWithTitle = computed(() => ({
  ...page.value,
  title: `${theme.value.title} | ${(page.value as any)?.title}`
}))

useContentHead(pageWithTitle)
</script>

<template>
  <div>
    <NuxtLayout :name="(pcto && 'team') || layout">
      <Transition name="page" mode="out-in">
        <ContentRenderer v-if="page" :key="(page as any)._id" :value="page" />
      </Transition>
    </NuxtLayout>
  </div>
</template>