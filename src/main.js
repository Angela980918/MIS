import {
	createApp
} from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入ElementPlus
import ElementPlus from 'element-plus'
// 导入ElementPlusIcons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// 导入ElementPlus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 导入svg图标
import 'virtual:svg-icons-register'



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(ElementPlus, {
	locale: zhCn,
})

app.use(router)
app.mount('#app')
