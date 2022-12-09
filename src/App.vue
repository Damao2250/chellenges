<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";

const router = useRouter();

type ListType = {
  title: string;
  path: string;
};
const challenges = ref<ListType[] | null>(null);
const list: ListType[] = [
  {
    title: "首页",
    path: "/",
  },
  {
    title: "hello world",
    path: "/holloWorld",
  },
  {
    title: "生命周期钩子",
    path: "/lifecycleHooks",
  },
  {
    title: "下一次DOM更新",
    path: "/nextDOMUpdateFlush",
  },
  {
    title: "DOM传送门",
    path: "/DOMPortal",
  },
  {
    title: "动态CSS",
    path: "/dynamicCssValues",
  },
  {
    title: "ref 全家桶",
    path: "/refFamily",
  },
  {
    title: "阻止事件冒泡",
    path: "/preventEventPropagation",
  },
  {
    title: "响应性丟失",
    path: "/losingReactivity",
  },
  {
    title: "首字母转大写",
    path: "/capitalize",
  },
  {
    title: "Prop验证",
    path: "/PropValidation",
  },
  {
    title: "可写的计算属性",
    path: "/writableComputed",
  },
  {
    title: "watch 全家桶",
    path: "/watchFamily",
  },
  {
    title: "浅层 ref",
    path: "/shallowRef",
  },
  {
    title: "依赖注入",
    path: "/dependencyInjection",
  },
  {
    title: "优化性能的指令",
    path: "/optimizePerformanceDirective",
  },
  {
    title: "切换器",
    path: "/useToggle",
  },
  {
    title: "计数器",
    path: "/useCounter",
  },
  {
    title: "实现本地存储函数",
    path: "/useLocalStorage",
  },
  {
    title: "切换焦点指令",
    path: "/VFocus",
  },
  {
    title: "节流点击指令",
    path: "/VDebounceClick",
  },
  {
    title: "函数式组件",
    path: "/functionalComponent",
  },
  {
    title: "渲染函数",
    path: "/renderFunction",
  },
  {
    title: "按键修饰符",
    path: "/keyModifiers",
  },
  {
    title: "鼠标坐标",
    path: "/useMouse",
  },
  {
    title: "全局CSS",
    path: "/globalCSS",
  },
  {
    title: "原始值API",
    path: "/rawAPI",
  },
  {
    title: "Effect作用域API",
    path: "/effectScopeAPI",
  },
  {
    title: "树组件",
    path: "/treeComponent",
  },
  {
    title: "自定义元素",
    path: "/customElement",
  },
  {
    title: "自定义ref",
    path: "/customRef",
  },
  {
    title: "激活的样式-指令",
    path: "/vActiveStyle",
  },
  {
    title: "实现简易版v-model指令",
    path: "/vModel",
  },
];
challenges.value = list;
// console.log(challenges.value);

function goToPath(item: ListType) {
  router.push({ path: item.path });
}
</script>

<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <div>
      <h1>Vue.js 挑战</h1>
      <p><a href="https://cn-vuejs-challenges.netlify.app/" target="_blank">Vue.js 挑战集合，一个 Vue.js 在线挑战平台</a></p>
      <iframe src="https://cn-vuejs-challenges.netlify.app/challenges.html#category=Built-ins" frameborder="0" style="border:2px solid #42B883;" width="1280" height="500"></iframe>
    </div>
    <h2>实现代码如下（vue3 + vite + TypeScript）：</h2>
    <div class="challenges">
      <button
        class="item"
        v-for="item in challenges"
        @click="goToPath(item)"
        :key="item.path"
      >
        {{ item.title }}
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.challenges {
  display: flex;
  flex-flow: row wrap; /** flex自动换行 */
  .item {
    padding: 8px 12px;
    margin-right: 10px;
  }
}
</style>
<style lang="scss">
.show-code {
  padding-bottom: 50px;
  display: flex;
  .code-content {
    flex: 1;
    padding: 10px;
    background: #eee;
    border: 1px solid #999;
  }
  .code-left {
    text-align: left;
  }
  .code-right {
  }
}
</style>
