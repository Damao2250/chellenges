<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
         <p>Hello Vue.js</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from "vue"

const codelist = ref(`
  // 在具有CSS作用域的Vue单文件组件设置全局CSS样式
  // 切换路由并刷新可恢复正常背景色
  
  <template>
    <div>
      <!-- 页面的期望输出是Hello World -->
      <h1>{{ msg }}</h1>
    </div>
  </template>
  <script lang="ts" setup>
  <\/script>
  <style scoped>
  p {
    font-size:20px;
    color:red;
    text-align: center;
    line-height: 50px;
  }

  /* 使其工作 */
  :global(body) {
    width: 100vw;
    height: 100vh;
    background-color: burlywood;
  }
  <\/style>
`)

</script>

<style scoped>
p {
  font-size:20px;
  color:red;
  text-align: center;
  line-height: 50px;
}

/* 使其工作 */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
