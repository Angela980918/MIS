import {
	createRouter,
	createWebHashHistory
} from "vue-router";

// 路由配置
const routes = [{
		path: '/',
		redirect: '/login'
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/views/login/index.vue')
	},
]

// 创建路由
const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router