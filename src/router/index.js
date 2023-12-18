import {
	createRouter,
	createWebHashHistory
} from "vue-router";

// 路由配置
const routes = [{
		path: '/',
		redirect: '/menu'
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/views/login/index.vue')
	},
	{
		// 菜单
		name: 'menu',
		path: '/menu',
		component: () => import('@/views/menu/index.vue'),
		children: [{
				// 菜单 --> 首页
				name: 'home',
				path: '/home',
				component: () => import('@/views/home/index.vue')
			},
			{
				// 菜单 --> 系统概述
				name: 'overview',
				path: '/overview',
				component: () => import('@/views/overview/index.vue')
			},
			{
				// 菜单 --> 合同管理
				name: 'file',
				path: '/file',
				component: () => import('@/views/file/index.vue')
			},
			{
				// 菜单 --> 操作日志
				name: 'operation_log',
				path: '/operation_log',
				component: () => import('@/views/operationLog/index.vue')
			},
			{
				// 菜单 --> 登录日志
				name: 'login_log',
				path: '/login_log',
				component: () => import('@/views/loginLog/index.vue')
			},
			{
				// 菜单 --> 系统设置
				name: 'set',
				path: '/set',
				component: () => import('@/views/set/index.vue')
			}
		]
	},
]

// 创建路由
const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router