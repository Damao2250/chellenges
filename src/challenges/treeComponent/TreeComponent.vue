<template>
  <!-- do something.... -->
   <ul>
    <li v-for="el in data" :key="el.key">
      {{el.title}}
      <TreeComponent v-if="el.children?.length" :data="el.children"></TreeComponent>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{data: TreeData[]}>()
</script>
