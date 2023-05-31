<script setup lang="ts">
defineEmits(['exit'])

export type Field = string | {
  type: 'selection' | 'textarea'
  label: string
  options?: string[]
}

defineProps<{
  fields: Field[]
  exitMessage?: string[]
  contacts: any[]
}>()

const exit = ref(false)
const onSubmit = () => {
  exit.value = true
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 0)
}
</script>

<template>
  
  <form 
    v-if="!exit"
    class="max-w-[600px] ml-0 md:mx-auto" 
    @submit.prevent="onSubmit"
    data-aos="fade-in"
    data-aos-delay="500" 
  >
    <template v-for="field in fields">
      <CwInput 
        class="row" 
        :label="field" v-if="typeof field === 'string'" 
      />

      <fieldset 
        v-else-if="'type' in field && field.type === 'selection'"
        class="row selection" 
      >
        <h2 class="text-2xl font-semibold mb-6"> 
          {{ field.label }} 
        </h2>
        <CwRadio v-for="option in field.options" :option="option" name="1" />
      </fieldset>

      <CwTextarea 
        v-else-if="'type' in field && field.type === 'textarea'" 
        class="row" 
        :label="field.label" 
      />
    </template>
    
    <CwButton theme="waterfall-2" class="mt-4"> Conferma </CwButton>
  </form>

  <ExitForm 
    v-else
    data-aos="fade-in" 
    data-aos-delay="300" 
    :contacts="contacts"
    :exitMessage="exitMessage"
  />
</template>

<style lang="postcss" scoped>
.row {
  @apply mt-5 mb-10 w-full max-w-[400px]
}

.selection label {
  @apply flex gap-4 mt-4 items-center;
}

.row.textarea {
  @apply w-full max-w-[600px]
}
</style>