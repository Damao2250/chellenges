<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div style="text-align:left;">
         <TreeComponent :data="treeData" />
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from "vue"
import TreeComponent from "./TreeComponent.vue"
const treeData = ref([{
  key: '1',
  title: 'Parent 1',
  children: [{
    key: '1-1',
    title: 'child 1',
  }, {
    key: '1-2',
    title: 'child 2',
    children: [{
      key: '1-2-1',
      title: 'grandchild 1',
    }, {
      key: '1-2-2',
      title: 'grandchild 2',
    },]
  },]
}, {
  key: '2',
  title: 'Parent 2',
  children: [{
    key: '2-1',
    title: 'child 1',
    children: [{
      key: '2-1-1',
      title: 'grandchild 1',
    }, {
      key: '2-1-2',
      title: 'grandchild 2',
    },]
  }, {
    key: '2-2',
    title: 'child 2',
  },]
}])

const codelist = ref(`
  // 实现一个树组件
  
  // TreeComponent.vue
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
  <\/script>

  
  // index.vue
  <template>
    div style="text-align:left;">
      <TreeComponent :data="treeData" />
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue"
    import TreeComponent from "./TreeComponent.vue"
    const treeData = ref([{
      key: '1',
      title: 'Parent 1',
      children: [{
        key: '1-1',
        title: 'child 1',
      }, {
        key: '1-2',
        title: 'child 2',
        children: [{
          key: '1-2-1',
          title: 'grandchild 1',
        }, {
          key: '1-2-2',
          title: 'grandchild 2',
        },]
      },]
    }, {
      key: '2',
      title: 'Parent 2',
      children: [{
        key: '2-1',
        title: 'child 1',
        children: [{
          key: '2-1-1',
          title: 'grandchild 1',
        }, {
          key: '2-1-2',
          title: 'grandchild 2',
        },]
      }, {
        key: '2-2',
        title: 'child 2',
      },]
    }])
  <\/script>
`)

</script>


