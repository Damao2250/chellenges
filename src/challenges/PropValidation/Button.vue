<template>
  <button :type="type">Button</button>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value: string) =>{
      return ["primary", "ghost", "dashed", "link", "text", "default"].includes(value)
    }
  },
});
</script>