<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <input v-focus="state" type="text">
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
const state = ref(false)
/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换'state'时,元素随着状态值获取/失去焦点
 *
*/
const VFocus = {
	mounted(el:HTMLInputElement) {
    el.focus()
  },
  updated(el:HTMLInputElement, binding:any) {
    binding.value ? el.focus() : el.blur()
  }
}
setInterval(() => {
  state.value = !state.value
}, 2000)

const codelist = ref(`
  // 编写v-focus自定义指令
  
  <template>
    <div>
      <input v-focus="state" type="text">
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue"
    const state = ref(false)
    /**
     * 实现一个自定义指令,让元素获取焦点
     * 确保当切换'state'时,元素随着状态值获取/失去焦点
     *
    */
    const VFocus = {
      mounted(el:HTMLInputElement) {
        el.focus()
      },
      updated(el:HTMLInputElement, binding:any) {
        binding.value ? el.focus() : el.blur()
      }
    }
    setInterval(() => {
      state.value = !state.value
    }, 2000)
  <\/script>
`)

</script>


