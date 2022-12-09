import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
// import  './utils/directives'

const app = createApp(App)

app.use(router)
app.use(hljsVuePlugin)

app.directive('watermark', (el, binding) => {
  function addWaterMarker(str:any, parentNode:any, font:any, textColor:any) {// 水印文字，父元素，字体，文字颜色
    var can = document.createElement('canvas');
    parentNode.appendChild(can);
    can.width = 300;
    can.height = 200;
    can.style.display = 'none';
    var cans:any = can.getContext('2d');
    cans.rotate(-20 * Math.PI / 180);
    cans.font = font || "16px PingFang SC";
    cans.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
    cans.textAlign = 'left';
    cans.textBaseline = 'Middle';
    cans.fillText(str, 300/3, 200/2);
    //  cans.fillText(str, 100 - (str.length * 28), 200 - (200 / 20));
    parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
  }
  addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
})


app.mount('#app')
