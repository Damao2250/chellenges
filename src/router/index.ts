import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // hello world
    path: '/holloWorld',
    name: 'holloWorld',
    component: () => import('@/challenges/helloWorld/index.vue'),
  },
  {
    // 生命周期钩子
    path: '/lifecycleHooks',
    name: 'lifecycleHooks',
    component: () => import('@/challenges/lifecycleHooks/index.vue'),
  },
  {
    // 下一次DOM更新
    path: '/nextDOMUpdateFlush',
    name: 'nextDOMUpdateFlush',
    component: () => import('@/challenges/nextDOMUpdateFlush/index.vue'),
  },
  {
    // DOM传送门
    path: '/DOMPortal',
    name: 'DOMPortal',
    component: () => import('@/challenges/DOMPortal/index.vue'),
  },
  {
    // 动态CSS
    path: '/dynamicCssValues',
    name: 'dynamicCssValues',
    component: () => import('@/challenges/dynamicCssValues/index.vue'),
  },
  {
    // ref 全家桶
    path: '/refFamily',
    name: 'refFamily',
    component: () => import('@/challenges/refFamily/index.vue'),
  },
  {
    // 阻止事件冒泡
    path: '/preventEventPropagation',
    name: 'preventEventPropagation',
    component: () => import('@/challenges/preventEventPropagation/index.vue'),
  },
  {
    // 响应性丟失
    path: '/losingReactivity',
    name: 'losingReactivity',
    component: () => import('@/challenges/losingReactivity/index.vue'),
  },
  {
    // 首字母转为大写
    path: '/capitalize',
    name: 'capitalize',
    component: () => import('@/challenges/capitalize/index.vue'),
  },
  {
    // Prop验证
    path: '/PropValidation',
    name: 'PropValidation',
    component: () => import('@/challenges/PropValidation/index.vue'),
  },
  {
    // 可写的计算属性
    path: '/writableComputed',
    name: 'writableComputed',
    component: () => import('@/challenges/writableComputed/index.vue'),
  },
  {
    // watch 全家桶
    path: '/watchFamily',
    name: 'watchFamily',
    component: () => import('@/challenges/watchFamily/index.vue'),
  },
  {
    // 浅层 ref
    path: '/shallowRef',
    name: 'shallowRef',
    component: () => import('@/challenges/shallowRef/index.vue'),
  },
  {
    // 依赖注入
    path: '/dependencyInjection',
    name: 'dependencyInjection',
    component: () => import('@/challenges/dependencyInjection/index.vue'),
  },
  {
    // 优化性能的指令
    path: '/optimizePerformanceDirective',
    name: 'optimizePerformanceDirective',
    component: () => import('@/challenges/optimizePerformanceDirective/index.vue'),
  },
  {
    // 切换器
    path: '/useToggle',
    name: 'useToggle',
    component: () => import('@/challenges/useToggle/index.vue'),
  },
  {
    // 计数器
    path: '/useCounter',
    name: 'useCounter',
    component: () => import('@/challenges/useCounter/index.vue'),
  },
  {
    // 实现本地存储函数
    path: '/useLocalStorage',
    name: 'useLocalStorage',
    component: () => import('@/challenges/useLocalStorage/index.vue'),
  },
  {
    // 切换焦点指令
    path: '/VFocus',
    name: 'VFocus',
    component: () => import('@/challenges/VFocus/index.vue'),
  },
  {
    // 节流点击指令
    path: '/VDebounceClick',
    name: 'VDebounceClick',
    component: () => import('@/challenges/VDebounceClick/index.vue'),
  },
  {
    // 函数式组件
    path: '/functionalComponent',
    name: 'functionalComponent',
    component: () => import('@/challenges/functionalComponent/index.vue'),
  },
  {
    // 渲染函数
    path: '/renderFunction',
    name: 'renderFunction',
    component: () => import('@/challenges/renderFunction/index.vue'),
  },
  {
    // 按键修饰符
    path: '/keyModifiers',
    name: 'keyModifiers',
    component: () => import('@/challenges/keyModifiers/index.vue'),
  },
  {
    // 鼠标坐标
    path: '/useMouse',
    name: 'useMouse',
    component: () => import('@/challenges/useMouse/index.vue'),
  },
  {
    // 全局CSS
    path: '/globalCSS',
    name: 'globalCSS',
    component: () => import('@/challenges/globalCSS/index.vue'),
  },
  {
    // 原始值API 
    path: '/rawAPI',
    name: 'rawAPI',
    component: () => import('@/challenges/rawAPI/index.vue'),
  },
  {
    // Effect作用域API
    path: '/effectScopeAPI',
    name: 'effectScopeAPI',
    component: () => import('@/challenges/effectScopeAPI/index.vue'),
  },
  {
    // 树组件
    path: '/treeComponent',
    name: 'treeComponent',
    component: () => import('@/challenges/treeComponent/index.vue'),
  },
  {
    // 自定义元素
    path: '/customElement',
    name: 'customElement',
    component: () => import('@/challenges/customElement/index.vue'),
  },
  {
    // 自定义ref
    path: '/customRef',
    name: 'customRef',
    component: () => import('@/challenges/customRef/index.vue'),
  },
  {
    // 激活的样式-指令
    path: '/vActiveStyle',
    name: 'vActiveStyle',
    component: () => import('@/challenges/vActiveStyle/index.vue'),
  },
  {
    // 实现简易版v-model指令
    path: '/vModel',
    name: 'vModel',
    component: () => import('@/challenges/vModel/index.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});