<script setup lang="ts">
export interface MessageProps {
  role: string
  content?: string
  botIcon?: string
  botName?: string
  userName?: string
}

const props = withDefaults(defineProps<MessageProps>(), {
  botIcon: 'octicon:copilot-24',
  botName: 'Bot',
  userName: 'Tu'
})

const isBot = computed(() => props?.role === 'assistant')
</script>

<template>

  <div
    class="max-w-[90%] border-[#292929] border rounded-lg break-words min-[620px]:max-w-[480px] 2xl:max-w-[550px] min-w-[85px]"
    :class="[role]"
  >
    <div class="mb-3 flex items-center gap-2">
      <span class="bg-white-1 rounded-full p-[3px]" v-if="isBot">
        <Icon :name="botIcon" size="22" class="text-black-1" />
      </span>

      <span class="font-bold"> 
        {{ isBot ? botName : userName }}
      </span>
    </div>

    <span v-html="content"></span>
  </div>

</template>

<style lang="postcss" scoped>
.user { 
  @apply self-end p-[10px] sm:px-4 sm:py-2;
  & > div { @apply mb-1 }
}

.assistant { @apply pb-3 pt-5 px-3 sm:pl-4 sm:pr-5 }
</style>