<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <input v-oh-model="value" type="text" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, unref, Directive } from "vue"
/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
*/
const VOhModel: Directive<HTMLInputElement, string>  = {
 mounted(el: HTMLInputElement, binding: any) {
    const bindingValue = binding.value
    const elValue = el.value
    if (bindingValue && elValue !== bindingValue) {
      el.value = unref(bindingValue)
    }
    el.addEventListener('input', (e:Event) => {
      const curValue = (<HTMLInputElement>e.target).value;
      if (value.value !== curValue) {
       value.value = curValue
      }
    }, false)
  },
  unmounted(el: HTMLInputElement ) {
    el.removeEventListener('input', (e: Event) => {
      const curValue = (<HTMLInputElement>e.target).value;
      if (value.value !== curValue) {
       value.value = curValue
      }
    }, false)
  }
}
const value = ref("Hello Vue.js")

const codelist = ref(`
  // 使页面正确显示“Hello World”
  
  <template>
    <div>
      <input v-oh-model="value" type="text" />
      <p>{{ value }}</p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, unref, Directive } from "vue"
    /**
     * 实现以下自定义指令
     * 在表单输入元素和数据间创建双向绑定
     *
    */
    const VOhModel: Directive<HTMLInputElement, string>  = {
    mounted(el: HTMLInputElement, binding: any) {
        const bindingValue = binding.value
        const elValue = el.value
        if (bindingValue && elValue !== bindingValue) {
          el.value = unref(bindingValue)
        }
        el.addEventListener('input', (e:Event) => {
          const curValue = (<HTMLInputElement>e.target).value;
          if (value.value !== curValue) {
          value.value = curValue
          }
        }, false)
      },
      unmounted(el: HTMLInputElement ) {
        el.removeEventListener('input', (e: Event) => {
          const curValue = (<HTMLInputElement>e.target).value;
          if (value.value !== curValue) {
          value.value = curValue
          }
        }, false)
      }
    }
    const value = ref("Hello Vue.js")
  <\/script>
`)

</script>


