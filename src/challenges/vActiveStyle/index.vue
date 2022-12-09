<template>
  <div class="show-code">
    <div class="code-content code-left">
      <highlightjs autodetect :code="codelist" />
    </div>
    <div class="code-content">
      <div style="text-align: left">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
            v-active-style="[{ color: 'red' }, () => activeTab === index]"
            @click="toggleTab(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 *
 */
const VActiveStyle = {
  created(el, binding) {
    const [style, fn] = binding.value;

    watchEffect(() => {
      if (fn && fn()) {
        Object.keys(style).forEach((key) => {
          el.style[key] = style[key];
        });
      } else {
        Object.keys(style).forEach((key) => {
          el.style[key] = "";
        });
      }
    });
  },
};
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const activeTab = ref(0);
function toggleTab(index: number) {
  activeTab.value = index;
}

const codelist = ref(`
  // 实现一个"激活的样式"指令
  
  <template>
    <div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          v-active-style="[{ color: 'red' }, () => activeTab === index]"
          @click="toggleTab(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref, watchEffect } from "vue";
    /**
     * 实现该指令 :
     * 当切换该选项卡时，列表项文本颜色变为红色
     * 
    */
    const VActiveStyle = {
      created(el, binding) {
        const [style, fn] = binding.value;

        watchEffect(() => {
          if (fn && fn()) {
            Object.keys(style).forEach((key) => {
              el.style[key] = style[key];
            });
          } else {
            Object.keys(style).forEach((key) => {
              el.style[key] = "";
            });
          }
        });
      },
    };
    const list = [1, 2, 3, 4, 5, 6, 7, 8];
    const activeTab = ref(0);
    function toggleTab(index: number) {
      activeTab.value = index;
    }
  <\/script>
`);
</script>


