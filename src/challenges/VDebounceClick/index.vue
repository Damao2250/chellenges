<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <button v-debounce-click:200="onClick">
          Click on it many times quickly（第一次点击不是立即生效的）
        </button>
        <button v-debounce-click1:200="onClick">
          Click on it many times quickly 1（第一次点击是立即生效的）
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// 第一次点击不是立即生效的
const VDebounceClick = {
  mounted(el, binding) {
    const time = binding.arg; //200
    let callback = binding.value;
    let timer;
    el.addEventListener("click", (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
        clearTimeout(timer);
      }, time);
    });
  },
};

// 第一次点击是立即生效的
const VDebounceClick1 = {
  // binding 获取指令相关参数
  mounted: (el: HTMLElement, binding: { value: Function; arg: number }) => {
    el.addEventListener("click", debounce(binding.value, binding.arg));
  },
};
function debounce(fn: Function, delay: number) {
  let timer = null;
  let clickCount = 0;
  return function () {
    // 保证第一次点击立即执行
    clickCount++;
    if (clickCount === 1) return void fn();
    // 再次点击，重新计时
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}

function onClick() {
  console.log("Only triggered once when clicked many times quickly");
}

const codelist = ref(`
  // 使页面正确显示“Hello World”
  
  <template>
    <div>
      <button v-debounce-click:200="onClick">
        Click on it many times quickly（第一次点击不是立即生效的）
      </button>
      <button v-debounce-click1:200="onClick">
        Click on it many times quickly（第一次点击是立即生效的）
      </button>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";

    // 第一次点击不是立即生效的
    const VDebounceClick = {
      mounted(el, binding) {
        const time = binding.arg; //200
        let callback = binding.value;
        let timer;
        el.addEventListener("click", (e) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            callback();
            clearTimeout(timer);
          }, time);
        });
      },
    };

    // 第一次点击是立即生效的
    const VDebounceClick1 = {
      // binding 获取指令相关参数
      mounted: (el: HTMLElement, binding: { value: Function; arg: number }) => {
        el.addEventListener("click", debounce(binding.value, binding.arg));
      },
    };
    function debounce(fn: Function, delay: number) {
      let timer = null;
      let clickCount = 0;
      return function () {
        // 保证第一次点击立即执行
        clickCount++;
        if (clickCount === 1) return void fn();
        // 再次点击，重新计时
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          fn();
        }, delay);
      };
    }

    function onClick() {
      console.log("Only triggered once when clicked many times quickly");
    }
  <\/script>
`);
</script>


