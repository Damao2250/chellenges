<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>
          {{ state.count }}
        </p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, shallowRef, watch } from "vue"
const state = shallowRef({ count: 1 })
// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })
/**
 * 修改以下代码使watch回调被触发
 *
*/
state.value = { count: 2 }

const codelist = ref(`
  // 使用 响应式 API: shallowRef 来完成
  
  <template>
    <div>
      <p>
        {{ state.count }}
      </p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, shallowRef, watch } from "vue"
    const state = shallowRef({ count: 1 })
    // 回调没被触发
    watch(state, () => {
      console.log("State.count Updated")
    }, { deep: true })
    /**
     * 修改以下代码使watch回调被触发
     *
    */
    state.value = { count: 2 }
  <\/script>
`)

</script>


