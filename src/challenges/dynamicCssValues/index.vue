<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <p>hello</p>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
  const theme = ref("red")
  const colors: string[] = ["blue", "yellow", "red", "green"]
  setInterval(() => {
    theme.value = colors[Math.floor(Math.random() * 4)]
  }, 1000)

const codelist = ref(`
  // Vue单文件组件 <style> 模块支持给CSS绑定动态值
  
  <template>
    <p>hello</p>
  </template>

  <script setup>
  import { ref } from "vue"
  const theme = ref("red")

  const colors = ["blue", "yellow", "red", "green"]

  setInterval(() => {
    theme.value = colors[Math.floor(Math.random() * 4)]
  }, 1000)

  <\/script>

  <style scoped>
  /* 修改以下代码绑定动态颜色 */
  p {
    color: v-bind(theme);
  }
  </style>
`)

</script>

<style scoped>
/* 修改以下代码绑定动态颜色 */
p {
  color: v-bind(theme);
}
</style>


