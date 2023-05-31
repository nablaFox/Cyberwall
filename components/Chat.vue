<script setup lang="ts">
defineEmits(['exit'])
</script>


<template>
  
  Chat
  <button @click="$emit('exit')">
    Exit
  </button>
</template>