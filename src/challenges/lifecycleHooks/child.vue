<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, inject ,onUnmounted} from "vue"

const timer:any = inject("timer")
const count:any = inject("count")

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})
 
// 卸载时清除timer即可
onUnmounted(()=>{
  clearInterval(timer.value)
})

</script>