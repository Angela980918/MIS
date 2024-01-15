<!-- 系统概述 -->
<template>
	<breadCrumb ref="breadcrumb" :item='item'></breadCrumb>

	<!-- 外壳 -->
	<div class="overview-wrapped">
		<!-- 顶部内容外壳 -->
		<div class="top-content-wrapped">
			<!-- 个人信息 -->
			<div class="person-info">
				<!-- 用户头像外壳 -->
				<div class="person-avatar-wrapped">
					<el-avatar :size="100" :src="userInfoStore.imageUrl" />
					<span class="department">所属部门：{{userInfoStore.department}}</span>
					<div class="company">所属公司：{{userInfoStore.company}}</div>
				</div>
				<!-- 竖线 -->
				<div class="line-wrapped">
					<div class="line"></div>
				</div>
				<!-- 详细信息外壳 -->
				<div class="detail-info-wrapped">
					<p>姓名：{{userInfoStore.name}}</p>
					<p>性别：{{userInfoStore.sex}}</p>
					<p>身份：{{userInfoStore.identity}}</p>
					<p>分管领域：超级管理</p>
					<p>权限：最高权限</p>
				</div>
			</div>
			<div class="manage-user pie"></div>

			<!-- 中间内容外壳 -->
			<div class="mid-content-wrapped">
				<div class="product-category-bar mid-content-left"></div>
				<div class="mid-content-right"></div>
			</div>

			<!-- 底部内容外壳 -->
			<div class="footer-content-wrapped">
				<div class="massage-level footer-content-left"></div>
				<div class="login-week footer-content-right"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import * as echarts from 'echarts';
	import { ref, onMounted } from 'vue';
	import BreadCrumb from '@/components/BreadCrumb.vue'
	import {
		useUserInfoStore
	} from '@/store/userInfo.js'

	// 面包屑
	const breadcrumb = ref()
	// 面包屑参数
	const item = ref({
		first: '系统概览',
	})

	const userInfoStore = useUserInfoStore()
	userInfoStore.fetchCompanyName()

	onMounted(() => {
		manageUser()
	})

	// 管理员与用户比值图
	const manageUser = async () => {
		// 通过类名 初始化
		const mu = echarts.init(document.querySelector('.manage-user'))
		mu.showLoading()
		// let data = await getAdminAndNumber()
		mu.hideLoading()
		document.querySelector('.manage-user').setAttribute('_echarts_instance_', '')
		// 设置基本的参数
		mu.setOption({
			title: {
				text: '管理与用户对比图',
				// subtext: 'Fake Data',
				left: 'center'
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				padding: [20, 20, 20, 20]
			},
			series: [{
				// name: 'Access From',
				type: 'pie',
				radius: '65%',
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' }
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}]
		})
		// 用于echarts响应式
		window.addEventListener('resize', function () {
			mu.resize()
		})
	}
</script>

<style lang="scss" scoped>
	// 总览内容
	.overview-wrapped {
		padding: 8px;
		height: calc(100vh - 85px);
		background: #f8f8f8;

		// 上部分内容 个人资料 + 饼状图
		.top-content-wrapped {
			height: 30%;
			display: flex;

			// 个人信息
			.person-info {
				height: 100%;
				margin-right: 8px;
				width: calc(50% - 8px);
				display: flex;
				background: #fff;

				// 头像区域
				.person-avatar-wrapped {
					display: flex;
					width: 50%;
					height: 100%;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					// 公司
					.company {
						margin: 10px 0px;
						font-size: 12px;
					}

					// 职务
					.level {
						margin-top: 8px;
						font-size: 12px;
					}
				}

				// 分割线
				.line-wrapped {
					height: 100%;
					display: flex;
					align-items: center;

					.line {
						height: 170px;
						border: 1px solid #D3D3D3;
					}
				}

				// 详细信息区域
				.detail-info-wrapped {
					height: 100%;
					width: calc(50% - 1px);
					margin-left: 50px;
					font-size: 12px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
				}
			}

			// 饼状图
			.pie {
				width: calc(50%);
				height: 100%;
				background: #fff;
			}
		}
	}
</style>