<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <button id="counter" @click="increment">
        {{ count }}
      </button>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue"

const codelist = ref(`
  // 在Vue.js中改变响应式状态时，DOM不会同步更新。 Vue.js 提供了一个用于等待下一次DOM更新的方法
  
  <template>
    <button id="counter" @click="increment">
      {{ count }}
    </button>
  </template>

  <script setup>
  import { ref, nextTick } from "vue"

  const count = ref(0)
  function increment() {
    count.value++
    /**
     * DOM还未更新,如何确保DOM已经更新 ?
     * 请保证以下输出为true
    */
    nextTick(() => {
      console.log(+document.getElementById("counter").textContent === 1)
    })
  }
  <\/script>
`)

const count = ref(0)
function increment() {
    count.value++
    /**
     * DOM还未更新,如何确保DOM已经更新 ?
     * 请保证以下输出为true
    */
   const btn = document.getElementById("counter") as any;
    nextTick(() => {
      console.log(+(btn.textContent) === 1)
    })
  }

</script>


