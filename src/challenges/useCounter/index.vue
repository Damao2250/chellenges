<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>Count: {{ count }}</p>
        <button @click="inc">inc</button>
        <button @click="dec">dec</button>
        <button @click="reset">reset</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
interface UseCounterOptions {
  min?: number;
  max?: number;
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置
 * 4. 最小值 & 最大值 选项支持
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue);
  const inc = () => {
    const res = count.value + 1;
    count.value = Math.min(res, options.max);
  };
  const dec = () => {
    const res = count.value - 1;
    count.value = Math.max(res, options.min);
  };
  const reset = () => {
    count.value = initialValue;
  };
  return { count, inc, dec, reset };
}
const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 });

const codelist = ref(`
  // 实现一个计数器
  
  <template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="inc">inc</button>
      <button @click="dec">dec</button>
      <button @click="reset">reset</button>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    interface UseCounterOptions {
      min?: number;
      max?: number;
    }

    /**
     * 实现计数器函数,确保功能正常工作
     * 1. 加 (+)
     * 2. 减 (-)
     * 3. 重置
     * 4. 最小值 & 最大值 选项支持
     */
    function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
      const count = ref(initialValue);
      const inc = () => {
        const res = count.value + 1;
        count.value = Math.min(res, options.max);
      };
      const dec = () => {
        const res = count.value - 1;
        count.value = Math.max(res, options.min);
      };
      const reset = () => {
        count.value = initialValue;
      };
      return { count, inc, dec, reset };
    }
    const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 });
  <\/script>
`);
</script>


