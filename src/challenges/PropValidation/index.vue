<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <!-- type填写其他类型控制台警告提示 -->
        <Button type='primary' />
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Button from './Button.vue'
const codelist = ref(`
  // 验证Button组件的Prop类型 ，使它只接收: primary | ghost | dashed | link | text | default ，且默认值为default
  
  // Button.vue
  <template>
    <button :type="type">Button</button>
  </template>
  <script lang="ts" setup>
    defineProps({
      type: {
        type: String,
        default: "default",
        validator: (value: string) =>{
          return ["primary", "ghost", "dashed", "link", "text", "default"].includes(value)
        }
      },
    });
  <\/script>

  // index.vue
  <template>
    <div>
      <!-- type填写其他类型控制台警告提示 -->
      <Button type='primary' />
    </div>
  </template>
  <script lang="ts" setup>
  <\/script>
`)

</script>


