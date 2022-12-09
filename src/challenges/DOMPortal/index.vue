<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <p>请看body右边的内容“Hello World teleport to body”</p>
      <Teleport to="body">
        <span style="color:red;writing-mode: tb-rl;font-size: 20px;">{{ msg }}</span>
      </Teleport>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
const msg = "Hello World teleport to body"
const codelist = ref(`
  // Vue.js提供了一个内置组件，将其插槽内容渲染到另一个DOM，成为该DOM的一部分
  
  <template>
    <!-- Renders it to a child element of the 'body' -->
    <Teleport to="body">
      <span>{{ msg }}</span>
    </Teleport>
  </template>

  <script setup>
    const msg = "Hello World teleport to body"
  <\/script>
`)

</script>


