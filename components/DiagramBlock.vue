<script setup lang="ts">
export type DiagramBlock = {
  title: string
  content?: string
  link?: string
  type?: string
  children?: DiagramBlock[]
  parent?: boolean
  depth?: number
}

const props = defineProps<DiagramBlock>()

const active = ref(false)
const childrenCount = computed(() => {
  return props.children?.filter(child => child.type === undefined).length ?? 0
})

setTimeout(() => {
  active.value = true
}, props.depth ? props.depth * 500 : 600)
</script>

<template>
  <div 
    class="diagram-item flex flex-col gap-16 items-center" 
    :class="[type && 'absolute']"
  >
    <NuxtLink 
      class="rounded-sm bg border-gray-1 border font-semibold px-3 py-2 capitalize w-[160px] text-center cursor-pointer hover:border-orange-3 transition-[border] duration-500" 
      :class="[
        children && 'line-down', 
        parent && 'line-up', 
        `depth-${depth || 0}`,
        { active },
        type
      ]"
      :to="link"
    >
      <h3 class="font-bold"> {{ title }} </h3>
      <span class="font-thin mt-2 block" v-if="content"> {{ content }} </span>
    </NuxtLink>

    <div 
      v-if="children" 
      class="flex justify-center gap-10 relative" 
      :class="[childrenCount > 1 && 'children', { active }]"
    >
      <DiagramBlock v-for="child in children" v-bind="{ ...child, parent: true, depth: (depth || 0) + 1 }" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.line {
  @apply pseudo w-0 h-0 bg-gray
}

.line-up::before,
.line-up::after {
  @apply transition-[height] duration-500 ease-in-out
}

.line-up::after {
  @apply line -top-[21px] abs-center-x;
  &.active { @apply h-[20px] w-[2px] }
}

.line-down::before {
  @apply line top-full abs-center-x;
  &.active { @apply h-[48px] w-[2px] }
}

.children::after {
  @apply line -top-[20px] transition-[width] duration-[600ms] ease-in-out;
  &.active { @apply h-[2px] w-[calc(100%-160px)] }
}

.left,
.right {
  @apply absolute top-[-80px] !w-[160px]
}

.left {
  @apply right-[220px];

  &::before {
    @apply line -top-[21px] left-[80px]
  }

  &.active::before { @apply w-[170px] h-[2px] }
}

.right {
  @apply left-[220px];

  &::before {
    @apply line -top-[21px] right-[80px]
  }

  &.active::before { @apply w-[170px] h-[2px] }
}

.depth-0 {
  @apply w-[350px] font-extrabold text-xl py-4 border-orange-3;
}

.depth-1,
.depth-2 { width: 240px }
</style>