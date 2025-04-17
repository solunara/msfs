import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: './src/env',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.110.208:8080', // 后端服务地址
  //       changeOrigin: true,
  //       rewrite: path => path.replace('\/api', ''),
  //     }
  //   }
  // }
})
