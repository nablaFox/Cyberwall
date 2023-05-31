<script setup lang="ts">
const { page } = useContent()

const data = await queryContent('pcto').where({ _path: { $not: '/pcto' }}).find()
const container = ref<HTMLElement | null>(null)

const pages = data.map((page) => {
  return {
    text: page._path?.split('/').pop() || '',
    link: page._path || ''
  }
}).sort((a, b) => a.text!.localeCompare(b.text || ''))

const addUnderlines = () => {
  if (!container.value) return
  
  const h2s = container.value.querySelectorAll('h2')
  const gradient = page.value.gradient

  h2s.forEach((h2) => {
    console.log('flag')
    const span = document.createElement('span')
    span.classList.add(gradient)
    h2.appendChild(span)
  })
}

onMounted(addUnderlines)
</script>

<template>

  <NuxtLayout name="default">
    <section class="pt-[160px] md:pb-16 section-wrapper mt-0 flex flex-col gap-6 md:gap-32 md:flex-row">
      <Sidebar :items="pages" :gradient="page.gradient" />
      <div>
        <TextGradient
          class="font-semibold text-[45px] md:text-[80px] lg:text-[100px] leading-[1] capitalize pb-2"
          as="h1"
          outlined
          :gradient="page.gradient"
          data-aos="fade-left"
        >
          {{ page.title }}
        </TextGradient>

        <p> {{ page?.heading }} </p>

        <div class="md:ml-[15%] pt-[75px] pb-6 w-[80%]" ref="container">
          <slot />
        </div>
      </div>
    </section>
  </NuxtLayout>
  
</template>

<style lang="postcss">
h2 > span {
  @apply underline h-[2px]
}

h2 {
  @apply inline-block text-[28px];
  &:not(:first-child) {
    @apply mt-4
  }
}

p { @apply mt-4 }
</style>
