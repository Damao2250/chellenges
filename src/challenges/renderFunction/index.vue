<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <MyButton :disabled="false" @custom-click="onClick">
          my button
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MyButton from "./MyButton";

const onClick = () => {
  console.log("onClick");
};
const codelist = ref(`
  // 使用h渲染函数来实现一个组件

  // MyButton.ts
  import { defineComponent, h } from 'vue';
  export default defineComponent({
    name: 'MyButton',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['custom-click'],
    setup(props, { emit, slots }) {
      return () =>
        h(
          'button',
          {
            disabled: props.disabled,
            onClick: () => emit('custom-click'),
          },
          slots.default?.()
        );
    },
  });
  

  // index.vue
  <template>
    <div>
      <MyButton :disabled="false" @custom-click="onClick">
        my button
      </MyButton>
    </div>
  </template>
  <script lang="ts" setup>
    import MyButton from "./MyButton";
    const onClick = () => {
      console.log("onClick");
    };
  <\/script>
`);
</script>


