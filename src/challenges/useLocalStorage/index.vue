<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>Counter: {{ counter }}</p>
        <button @click="update">Update</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue"
/**
 * 实现'useLocalStorage'函数
*/
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(window.localStorage.getItem(key) ?? initialValue);
  watchEffect(()=> window.localStorage.setItem(key, value.value));
  return value
}
const counter = useLocalStorage("counter", 0)
// 我们可以通过触发'counter'的'getter'来获取本地存储的值
console.log(counter.value)
// 同样地,我们也可以通过触发'counter'的'setter'来设置本地存储的值
const update = () => counter.value++

const codelist = ref(`
  // 经常需要使用localStorageAPI，一个好用的可组合函数封装将帮助我们更好地使用它
  
  <template>
    <div>
      <p>Counter: {{ counter }}</p>
      <button @click="update">Update</button>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, watchEffect } from "vue"
    /**
     * 实现'useLocalStorage'函数
    */
    function useLocalStorage(key: string, initialValue: any) {
      const value = ref(window.localStorage.getItem(key) ?? initialValue);
      watchEffect(()=> window.localStorage.setItem(key, value.value));
      return value
    }
    const counter = useLocalStorage("counter", 0)
    // 我们可以通过触发'counter'的'getter'来获取本地存储的值
    console.log(counter.value)
    // 同样地,我们也可以通过触发'counter'的'setter'来设置本地存储的值
    const update = () => counter.value++
  <\/script>
`);
</script>


