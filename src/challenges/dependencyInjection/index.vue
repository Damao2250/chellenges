<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <Child />
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, provide } from "vue"
import Child from "./Child.vue"
const count = ref(1)
provide("count", count)
setInterval(() => {
  count.value++
}, 1000)

const codelist = ref(`
  // 使用 组合式 API: 依赖注入 来完成

  // Child.vue
  <template>
    <p>test:{{ count }}</p>
  </template>
  <script setup lang="ts">
    import { inject } from 'vue';
  // 添加代码,使'count'值注入子组件
  const count = inject('count');
  <\/script>

  <template>
    <div>
      <Child />
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, provide } from "vue"
    import Child from "./Child.vue"
    const count = ref(1)
    provide("count", count)
    setInterval(() => {
      count.value++
    }, 1000)
  <\/script>
`)

</script>


