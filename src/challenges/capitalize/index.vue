<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <CapitalizeInput v-model.capitalize="value"/>
        <h1>{{value}}</h1>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
import CapitalizeInput from './capitalizeInput.vue'
const value = ref('')

const codelist = ref(`
  // 建一个自定义的修饰符 capitalize，它会自动将 v-model 绑定输入的字符串值首字母转为大写
  
  // 子组件 CapitalizeInput.vue
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
      emits('update:modelValue', capitalize ? \`\${value.charAt(0).toUpperCase()}\${value.slice(1)}\` :value)
    }
  <\/script>

  // 父组件
  <template>
    <div>
      <CapitalizeInput v-model.capitalize="value"/>
      <h1>{{value}}</h1>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue"
    import CapitalizeInput from './capitalizeInput.vue'
    const value = ref('')
  <\/script>
`)
</script>


