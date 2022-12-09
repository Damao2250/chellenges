<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <input v-model="text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, customRef } from "vue";
/**
 * 补全以下函数来实现防抖ref :
 */
function useDebouncedRef(value:any, delay = 200) {
  let timeout = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
const text = useDebouncedRef("hello");
/**
 * 确保在输入框快速输入时, 只触发一次回调
 */
watch(text, (value) => {
  console.log(value);
});

const codelist = ref(`
  // 实现防抖ref 
  
  <template>
    <div>
      <input v-model="text" />
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, watch, customRef } from "vue";
    /**
     * 补全以下函数来实现防抖ref :
     */
    function useDebouncedRef(value:any, delay = 200) {
      let timeout = null;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newValue) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    }
    const text = useDebouncedRef("hello");
    /**
     * 确保在输入框快速输入时, 只触发一次回调
     */
    watch(text, (value) => {
      console.log(value);
    });
  <\/script>
`);
</script>


