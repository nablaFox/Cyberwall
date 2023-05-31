<script setup>
defineProps(['option', 'name'])
const checked = defineModel()
</script>

<template>
  <label class="radio-btn">
    <input type="radio" v-model="checked" :value="option" :name="name" >
    {{ option }}
  </label>
</template>

<style scoped lang="postcss">
input {
  @apply border-2 border-gray rounded-[50%] w-4 h-4;
  transition: border-color 0.2s ease-in-out;
  &:checked {
    @apply border-pink-1
  }
}
</style>