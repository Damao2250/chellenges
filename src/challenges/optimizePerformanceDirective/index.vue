<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
         <span v-once>使它从不更新: {{ count }}</span>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
const count = ref(0)
setInterval(() => {
  count.value++
}, 1000)

const codelist = ref(`
  // Vue.js 提供了一个指令，以便只渲染一次元素和组件，并且跳过以后的更新
  
  <template>
    <div>
      <span v-once>使它从不更新: {{ count }}</span>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue"
    const count = ref(0)
    setInterval(() => {
      count.value++
    }, 1000)
  <\/script>
`)

</script>


