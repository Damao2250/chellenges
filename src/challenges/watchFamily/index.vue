<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>
          {{ count }}
        </p>
        <p ref="eleRef">
          {{ age }}
        </p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
const count = ref(0)
/**
 * 挑战 1: Watch 一次
 * 确保副作用函数只执行一次
*/
const unwatch = watch(count, () => {
  console.log("Only triggered once")
  unwatch()
})
count.value = 1
setTimeout(() => count.value = 2)

/**
 * 挑战 2: Watch 对象
 * 确保副作用函数被正确触发
*/
const state = ref({
  count: 0,
})
watch(state, () => {
  console.log("The state.count updated")
},{
   deep: true
})
state.value.count = 2

/**
 * 挑战 3: 副作用函数刷新时机
 * 确保正确访问到更新后的`eleRef`值
*/
const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
},{
  flush: 'post'
})
age.value = 18

const codelist = ref(`
  // 使用 响应式 API: watch 来完成
  
  <template>
    <div>
      <p>
        {{ count }}
      </p>
      <p ref="eleRef">
        {{ age }}
      </p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, watch } from "vue"
    const count = ref(0)
    /**
     * 挑战 1: Watch 一次
     * 确保副作用函数只执行一次
    */
    const unwatch = watch(count, () => {
      console.log("Only triggered once")
      unwatch()
    })
    count.value = 1
    setTimeout(() => count.value = 2)

    /**
     * 挑战 2: Watch 对象
     * 确保副作用函数被正确触发
    */
    const state = ref({
      count: 0,
    })
    watch(state, () => {
      console.log("The state.count updated")
    },{
      deep: true
    })
    state.value.count = 2

    /**
     * 挑战 3: 副作用函数刷新时机
     * 确保正确访问到更新后的'eleRef'值
    */
    const eleRef = ref()
    const age = ref(2)
    watch(age, () => {
      console.log(eleRef.value)
    },{
      flush: 'post'
    })
    age.value = 18

  <\/script>
`)

</script>


