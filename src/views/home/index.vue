<!-- 首页 -->
<template>
	<BreadCrumb ref="breadcrumb" :item='item' />
	<!-- 首页外壳 -->
	<div class="home-wrapped">
		<!-- 轮播图外壳 -->
		<div class="swiper-wrapped">
			<el-carousel :interval="4000" type="card" height="200px" indicator-position='outside'>
				<el-carousel-item v-for="item in 6" :key="item">
					<h3 text="2xl" justify="center">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>

		<!-- 栅格布局外壳 -->
		<div class="layout-wrapped">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="company-message-area">
						<span>1</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="company-message-area">
						<span>2</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="company-message-area">
						<span>3</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="company-message-area">
						<span>4</span>
					</div>
				</el-col>
			</el-row>
		</div>

		<!-- 表格外壳 -->
		<div class="two-table-wrapped"></div>

	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import BreadCrumb from '@/components/BreadCrumb.vue'
	// 面包屑
	const breadcrumb = ref()

	// 面包屑参数
	const item = ref({
		first: '首页',
	})
</script>

<style lang="scss" scoped>
	@mixin table-class {
		height: 232px;
		width: 48%;
		display: flex;
		flex-direction: column;
	}


	// 首页外壳
	.home-wrapped {
		padding: 8px;
		height: calc(100vh - 101px);
		background: #f5f5f5;
		display: flex;
		flex-direction: column;


		// 轮播图外壳
		.swiper-wrapped {
			padding: 0 20px;
			background: #fff;
			margin-bottom: 8px;
		}

		// 栅格布局外壳
		.layout-wrapped {
			padding: 8px;
			margin-bottom: 8px;
			background: #fff;


			// 公司信息区域
			.company-message-area {
				background: #f5f5f5;
				height: 200px;
				padding: 8px;
				cursor: pointer;
			}

		}

		// 表格外壳
		.two-table-wrapped {}
	}


	.el-carousel__item h3 {
		color: #475669;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
		text-align: center;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.el-row {
		margin-bottom: 20px;
	}

	.el-row:last-child {
		margin-bottom: 0;
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>