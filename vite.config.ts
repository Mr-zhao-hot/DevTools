import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 5174, // 开发服务器端口
    strictPort: true, // 如果端口被占用直接报错
    open: true, // 自动打开浏览器
    proxy: {
      // API代理配置
      '/api': {
        target: 'http://172.16.202.185:8080', // 后端API地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false, // 如果是https需要设为true
      },
    },
  },
})
