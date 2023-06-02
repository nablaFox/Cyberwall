<script setup>
defineProps(['label'])
const text = defineModel()
</script>

<template>
  <div class="textarea">
    <h2 class="text-2xl font-semibold mb-6" v-if="label"> 
      {{ label }} 
    </h2>
    <textarea cols="40" rows="10" v-model="text"></textarea>
  </div>
</template>

<style lang="postcss" scoped>
textarea {
  @apply border-2 border-gray rounded-[5px] w-full h-[200px] p-4;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    @apply border-pink-1
  }
}
</style>