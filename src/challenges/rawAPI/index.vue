<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>
          {{ reactiveState.count }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, isReactive, toRaw, markRaw } from "vue";
const state = { count: 1 };
const reactiveState = reactive(state);
/**
 * 修改以下代码使输出为true
 */
console.log(toRaw(reactiveState) === state);
/**
 * 修改以下代码使输出为false
 */
const info = markRaw({ count: 1 });
const reactiveInfo = reactive(info);
console.log(isReactive(reactiveInfo));
const codelist = ref(`
  // 使用 响应式 API: [xx]Raw 来完成
  
  <template>
    <div>
      <p>
        {{ reactiveState.count }}
      </p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, reactive, isReactive, toRaw, markRaw } from "vue";
    const state = { count: 1 };
    const reactiveState = reactive(state);
    /**
     * 修改以下代码使输出为true
     */
    console.log(toRaw(reactiveState) === state);
    /**
     * 修改以下代码使输出为false
     */
    const info = markRaw({ count: 1 });
    const reactiveInfo = reactive(info);
    console.log(isReactive(reactiveInfo));
  <\/script>
`);
</script>


