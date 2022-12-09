<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>
          <span @click="update(count-1)">-</span>
          {{ count }}
          <span @click="update(count+1)">+</span>
        </p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"

function useCount() {
  const state = reactive({
    count: 0,
  })
  function update(value: number) {
    state.count = value
  }
  return {
    state: toRefs(state),
    update,
  }
}
// 确保解构不丢失响应性
const { state: { count }, update } = useCount()

const codelist = ref(`
  // 在 JavaScript 中，我们经常解构/扩展对象。
  // 在Vue.js中，我们同样解构/扩展“响应式”对象，但它会失去响应性。
  // 保证解构/扩展不丢失响应性
  
  <template>
    <div>
      <p>
        <span @click="update(count-1)">-</span>
        {{ count }}
        <span @click="update(count+1)">+</span>
      </p>
    </div>
  </template>
  <script lang="ts" setup>
    import { reactive, toRefs } from "vue"
    function useCount() {
      const state = reactive({
        count: 0,
      })
      function update(value: number) {
        state.count = value
      }
      return {
        state: toRefs(state),
        update,
      }
    }
    // 确保解构不丢失响应性
    const { state: { count }, update } = useCount()
  <\/script>
`)

</script>


