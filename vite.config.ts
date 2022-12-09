import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 公共基础路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') ,
    },
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 3009,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {
      // '/api': {
      //   target: 'http://www.xxxxx.com', // 接口基地址
      //   rewrite: path => {
      //     console.log(path); // 打印[/api/userInfo] 这就是http-proxy要请求的url,我们基地址实际是没有/api 所以replace掉
      //     return path.replace(/^\/api/, '');
      //   }
      // }
    },
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
  },
})
