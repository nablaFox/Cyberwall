<script setup lang="ts">
export interface MessageProps {
  role: string
  content?: string
  botIcon?: string
}

const props = withDefaults(defineProps<MessageProps>(), {
  botIcon: 'octicon:copilot-24',
})

const isBot = computed(() => props?.role === 'assistant')
</script>

<template>

  <div
    class="max-w-[480px] 2xl:max-w-[550px] border-[#292929] border rounded-lg px-5 py-2 break-words"
    :class="[role]"
  >
    <div class="mb-3 flex items-center gap-2">
      <span class="bg-white-1 rounded-full p-[3px]" v-if="isBot">
        <Icon :name="botIcon" size="22" class="text-black-1" />
      </span>

      <span class="font-bold"> 
        {{ isBot ? 'Cyberwall' : 'Tu' }}
      </span>
    </div>

    <span v-html="content"></span>
  </div>

</template>

<style lang="postcss" scoped>
.user { 
  @apply self-end;
  & > div { @apply mb-1 }
}
</style>