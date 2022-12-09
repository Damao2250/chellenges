<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <!-- 页面的期望输出是Hello World -->
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
const msg = ref("Hello World")
const codelist = ref(`
  // 使页面正确显示“Hello World”
  
  <template>
    <div>
      <!-- 页面的期望输出是Hello World -->
      <h1>{{ msg }}</h1>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue"
    const msg = ref("Hello World")
  <\/script>
`)

</script>


