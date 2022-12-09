<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div>
        <list-component
          :list="list"
          :active-index="activeIndex"
          @toggle="toggle"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, h, VNode } from "vue";

/**
 * 实现该函数式组件 :
 * 1. 使用'list'数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */
const ListComponent = (props: any, { emit }): VNode => {
  const List = () => {
    const toggleHandle = (index: number) => {
      emit("toggle", index);
    };
    return props.list.map((item: { name: string }, index: number) => {
      return h(
        "li",
        {
          onClick: () => {
            toggleHandle(index);
          },
          style:
            props.activeIndex === index ? { color: "red" } : { color: "blue" },
        },
        item.name
      );
    });
  };
  return h("ul", List());
};

ListComponent.props = ["list", "activeIndex"];
ListComponent.emits = ["toggle"];

const list = [
  {
    name: "John",
  },
  {
    name: "Doe",
  },
  {
    name: "Smith",
  },
];

const activeIndex = ref(0);

function toggle(index: number) {
  activeIndex.value = index;
}

const codelist = ref(`
  // 尝试实现一个函数式组件
  
  <template>
    <div>
      <!-- 页面的期望输出是Hello World -->
      <h1>{{ msg }}</h1>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, h, VNode } from "vue";

    /**
     * 实现该函数式组件 :
     * 1. 使用'list'数据渲染列表元素 (ul/li)
     * 2. 当点击列表子元素时,将其文本颜色更改为红色
     */
    const ListComponent = (props: any, { emit }): VNode => {
      const List = () => {
        const toggleHandle = (index: number) => {
          emit("toggle", index);
        };
        return props.list.map((item: { name: string }, index: number) => {
          return h(
            "li",
            {
              onClick: () => {
                toggleHandle(index);
              },
              style:
                props.activeIndex === index ? { color: "red" } : { color: "blue" },
            },
            item.name
          );
        });
      };
      return h("ul", List());
    };

    ListComponent.props = ["list", "activeIndex"];
    ListComponent.emits = ["toggle"];

    const list = [
      {
        name: "John",
      },
      {
        name: "Doe",
      },
      {
        name: "Smith",
      },
    ];

    const activeIndex = ref(0);

    function toggle(index: number) {
      activeIndex.value = index;
    }
  <\/script>
`);
</script>


