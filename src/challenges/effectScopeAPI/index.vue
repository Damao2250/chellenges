<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <p>{{ doubled }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, watchEffect, effectScope } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// 使用 'effectScope' API 使这些Effect效果在触发一次后停止
const scope = effectScope()

scope.run(() => {
  watch(doubled, () => {
    console.log(doubled.value)
    scope.stop()
  })
  watchEffect(() => console.log(`Count: ${doubled.value}`))
})

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

const codelist = ref(`
  // 使用响应式API: effectScope来完成
  
  <template>
    <div>
      <p>{{ doubled }}</p>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, computed, watch, watchEffect, effectScope } from "vue";
    const counter = ref(1)
    const doubled = computed(() => counter.value * 2)

    // 使用 'effectScope' API 使这些Effect效果在触发一次后停止
    const scope = effectScope()

    scope.run(() => {
      watch(doubled, () => {
        console.log(doubled.value)
        scope.stop()
      })
      watchEffect(() => console.log(\`Count: ${doubled.value}\`))
    })

    counter.value = 2

    setTimeout(() => {
      counter.value = 4
    })
  <\/script>
`);
</script>


