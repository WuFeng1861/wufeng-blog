import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './style.css'
import './styles/themes/natural.css'
import './styles/themes/sci-fi.css'
import './styles/themes/gray.css'
import './styles/themes/fresh.css'
import './styles/themes/glass.css'
import App from './App.vue'
import router from './router'
import loadingDirective from './directives/newloading.ts'

const app = createApp(App)
const pinia = createPinia()

// 注册自定义指令
app.directive('newloading', loadingDirective);

app.use(router)
app.use(Antd)
app.use(pinia)

app.mount('#app')