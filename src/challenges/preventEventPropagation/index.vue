<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div @click="click1()">
        <div @click.stop="click2()">
          click me
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
// 阻止点击事件的冒泡
const click1 = () => {
  console.log('click1')
}

const click2 = () => {
  console.log('click2')
}

const codelist = ref(`
  // 需要阻止点击事件的冒泡
  
  <template>
    <div @click="click1()">
      <div @click.stop="click2()">
        click me
      </div>
    </div>
  </template>
  <script lang="ts" setup>
    // 阻止点击事件的冒泡
    const click1 = () => {
      console.log('click1')
    }

    const click2 = () => {
      console.log('click2')
    }
  <\/script>
`)

</script>


