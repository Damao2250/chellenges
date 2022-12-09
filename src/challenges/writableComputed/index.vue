<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>{{ count }}</p>
        <p>{{ plusOne }}</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    console.log(count.value);
    console.log(val);
    return count.value = val - 1
    },
  // set: () => count.value++
});
/**
 * 确保 `plusOne` 可以被写入。
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2。
*/
plusOne.value++;

const codelist = ref(`
  // 创建一个可写的计算属性
  
  <template>
    <div>
      <p>{{ count }}</p>
      <p>{{ plusOne }}</p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, computed } from 'vue';
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        console.log(count.value);
        console.log(val);
        return count.value = val - 1
        },
      // set: () => count.value++
    });
    /**
     * 确保 'plusOne' 可以被写入。
     * 最终我们得到的结果应该是 'plusOne' 等于 3 和 'count' 等于 2。
    */
    plusOne.value++;
  <\/script>
`)

</script>


