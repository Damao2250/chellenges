<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <Child v-show="visible" />
        <p>
          <button @click="toggle">
            Toggle Child Component
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, provide } from "vue"
import Child from "./child.vue"

const codelist = ref(`
// 使用 组合式 API: 生命周期钩子 来完成

// index.vue
<template>
  <div>
    <Child v-if="visible" />
    <p>
      <button @click="toggle">
        Toggle Child Component
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue"
import Child from "./Child.vue"

const visible = ref(true)
const timer = ref(null)
const count = ref(0)
provide("timer", timer)
provide("count", count)

function toggle() {
  visible.value = !visible.value
}
<\/script>


// child.vue
<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, inject, onUnmounted } from "vue"

const timer = inject("timer")
const count = inject("count")

onMounted(() => {
  // 切换子组件时, 定时器将不正常工作(越来越快), 让我们来修复它 . 
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

// 卸载时清除timer即可
onUnmounted(() => {
  window.clearInterval(timer.value)
})

<\/script>
`)

const visible = ref(true)
const timer = ref(null)
const count = ref(0)
provide("timer", timer)
provide("count", count)

function toggle() {
  visible.value = !visible.value
}

</script>

<style lang="scss" scoped>
.child-content {
  border: 1px solid #777;
  background: #888;
}
</style>