<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p @click="increase">Increase</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const count = ref(0);
/**
 * 实现'until'函数
 */
function until(initial) {
  function toBe(value) {
    return new Promise((resolve) => {
      const unWatch = watch(initial, (newVal) => {
        if (newVal === value) {
          resolve(value);
          unWatch();
        }
      });
    });
  }
  return {
    toBe,
  };
}

async function increase() {
  count.value = 0;
  setInterval(() => {
    count.value++;
  }, 1000);
  await until(count).toBe(3);
  console.log(count.value === 3); // 确保输出为true
}

const codelist = ref(`
  // 需要依赖于异步的返回结果做一些后续处理，until函数在这种场景下非常有用
  
  <template>
    <div>
      <p @click="increase">Increase</p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, watch } from "vue";
    const count = ref(0);
    /**
     * 实现'until'函数
     */
    function until(initial) {
      function toBe(value) {
        return new Promise((resolve) => {
          const unWatch = watch(initial, (newVal) => {
            if (newVal === value) {
              resolve(value);
              unWatch();
            }
          });
        });
      }
      return {
        toBe,
      };
    }

    async function increase() {
      count.value = 0;
      setInterval(() => {
        count.value++;
      }, 1000);
      await until(count).toBe(3);
      console.log(count.value === 3); // 确保输出为true
    }
  <\/script>
`);
</script>


