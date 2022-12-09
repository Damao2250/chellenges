<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <!-- 添加按键修饰符让即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.alt="onClick1" @click.shift="onClick1">A</button>
        <!-- 添加按键修饰符让有且只有 Shift 被按下的时候才触发 -->
        <button @click.shift.exact="onCtrlClick">A</button>
        <!-- 添加按键修饰符让没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick2">A</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
function onClick1() {
  console.log("onClick1");
}
function onCtrlClick() {
  console.log("onCtrlClick");
}
function onClick2() {
  console.log("onClick2");
}
const codelist = ref(`
  // Vue 允许为 v-on 或者 @ 在监听键盘事件时添加按键修饰符
  
  <template>
     <div>
      <!-- 添加按键修饰符让即使 Alt 或 Shift 被一同按下时也会触发 -->
      <button @click.alt="onClick1" @click.shift="onClick1">A</button>
      <!-- 添加按键修饰符让有且只有 Shift 被按下的时候才触发 -->
      <button @click.shift.exact="onCtrlClick">A</button>
      <!-- 添加按键修饰符让没有任何系统修饰符被按下的时候才触发 -->
      <button @click.exact="onClick2">A</button>
    </div>
  </template>
  <script lang="ts" setup>
    function onClick1() {
      console.log("onClick1");
    }
    function onCtrlClick() {
      console.log("onCtrlClick");
    }
    function onClick2() {
      console.log("onClick2");
    }
  <\/script>
`);
</script>


