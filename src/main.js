import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from '@/i18n/i18n' 

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia).use(ElementPlus).use(i18n)

app.mount('#app')