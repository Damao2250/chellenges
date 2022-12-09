<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div id="customApp"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineCustomElement, h } from "vue";
/**
 * 实现以下代码创建一个自定义元素.
 * 确保页面输出 "Hello Vue.js".
 */

// 自定义组件
const VueJs = defineCustomElement({
  props: {
    message: String,
  },
  // setup:(props)=>()=>h('span',null,props.message)
  render() {
    return h("span", null, this.message);
  },
});
if (!customElements.get("vue-js")) {
  customElements.define("vue-js", VueJs);
}
onMounted(() => {
  document.getElementById("customApp")!.innerHTML =
    '<vue-js message="Hello Vue.js"></vue-js>';
});

const codelist = ref(`
  // Vue 能很好地解析和创建 Web Components
  
  <template>
    <div id="customApp"></div>
  </template>
  <script lang="ts" setup>
    import { ref, onMounted, defineCustomElement, h } from "vue";
    /**
     * 实现以下代码创建一个自定义元素.
     * 确保页面输出 "Hello Vue.js".
     */

    // 自定义组件
    const VueJs = defineCustomElement({
      props: {
        message: String,
      },
      // setup:(props)=>()=>h('span',null,props.message)
      render() {
        return h("span", null, this.message);
      },
    });
    if (!customElements.get("vue-js")) {
      customElements.define("vue-js", VueJs);
    }
    onMounted(() => {
      document.getElementById("customApp")!.innerHTML =
        '<vue-js message="Hello Vue.js"></vue-js>';
    });
  <\/script>
`);
</script>


