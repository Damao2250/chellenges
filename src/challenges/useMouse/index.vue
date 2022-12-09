<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>Mouse position is at: {{ x }}, {{ y }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
function useEventListener<T extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  event: T,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[T]) => void
) {
  // 注意要移除事件
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}
function useMouse() {
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, "mousemove", (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
  });
  return {
    x,
    y,
  };
}
const { x, y } = useMouse();

const codelist = ref(`
  // 实现页面实时显示鼠标坐标
  
  <template>
    <div>
      <p>Mouse position is at: {{ x }}, {{ y }}</p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, onMounted, onUnmounted } from "vue";
    function useEventListener<T extends keyof HTMLElementEventMap>(
      target: HTMLElement,
      event: T,
      callback: (this: HTMLElement, ev: HTMLElementEventMap[T]) => void
    ) {
      // 注意要移除事件
      onMounted(() => {
        target.addEventListener(event, callback);
      });
      onUnmounted(() => {
        target.removeEventListener(event, callback);
      });
    }
    function useMouse() {
      const x = ref(0);
      const y = ref(0);
      useEventListener(window, "mousemove", (e) => {
        x.value = e.clientX;
        y.value = e.clientY;
      });
      return {
        x,
        y,
      };
    }
    const { x, y } = useMouse();
  <\/script>
`);
</script>


