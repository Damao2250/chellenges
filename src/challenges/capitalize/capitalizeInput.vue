<template>
  <input type="text" :value="modelValue" @input="handleInput">
</template>
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  modelValue: string,
  modelModifiers?: {
    capitalize?: boolean
  }
}>()
const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()

const capitalize = computed(() => props?.modelModifiers?.capitalize)
const handleInput = (e: InputEvent) => {
  const value = (<HTMLInputElement>e.target).value
  emits('update:modelValue', capitalize ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` :value)
}
</script>
