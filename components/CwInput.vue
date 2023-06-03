<script setup>
defineProps(['label'])
const input = defineModel()
</script>

<template>
  <div class="input">
    <label name="Name" class="capitalize font-semibold text-lg"> 
      {{ label }} 
    </label>
    <input type="text" v-model="input" />
  </div>
</template>

<style scoped lang="postcss">
input {
  @apply px-1 py-[5px] mt-[5px] text-base border-b-[1px] border-gray-1 transition-all duration-300 outline-none w-full;
  &:focus { @apply border-pink-1 }
}
</style>