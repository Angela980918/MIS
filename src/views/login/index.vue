<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header-wrapped">
				<div class="header-content">
					<h3>MIS</h3>
					<span class="welcome-content">欢迎您的登录</span>
				</div>
			</el-header>
			<el-main>
				<div class="login-wrapped">
					<el-card class="box-card">
						<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
							<el-tab-pane label="登录" name="first">
								<el-form class="login-form">
									<el-form-item label="账号">
										<el-input v-model="loginData.account" placeholder="请输入账号" />
									</el-form-item>
									<el-form-item label="密码">
										<el-input v-model="loginData.password" show-password placeholder="请输入密码" />
									</el-form-item>
									<div class="login-footer">
										<div class="forget-password">
											<span class="forget-password-btn" @click="openForget">忘记密码</span>
										</div>
										<div class="login-btn">
											<el-button type="primary">登录</el-button>
										</div>
										<div class="register-btn">
											还没有账号？<span class="to-register">马上注册</span>
										</div>
									</div>
								</el-form>
							</el-tab-pane>
							<el-tab-pane label="注册" name="second">
								<el-form class="register-form">
									<el-form-item label="账号">
										<el-input v-model="registerData.account" placeholder="账号长度6-12位" />
									</el-form-item>
									<el-form-item label="密码">
										<el-input v-model="registerData.password" placeholder="密码需长度6-12位含字母数字" />
									</el-form-item>
									<el-form-item label="确认">
										<el-input v-model="registerData.nextPassword" placeholder="请再次输入密码" />
									</el-form-item>
									<div class="register-btn">
										<el-button type="primary">注册</el-button>
									</div>
								</el-form>
							</el-tab-pane>
						</el-tabs>
					</el-card>
				</div>
			</el-main>
			<el-footer class="footer-wrapped">
				<div class="footer-content">
					<div class="title">
						<span>MIS</span>
						<span>Vue3 + Vite + Pinia + ElementPlus</span>
						<span>Express.js</span>
					</div>
				</div>
			</el-footer>
		</el-container>
	</div>
	<forgetPassword ref='forgetV'></forgetPassword>
</template>

<script lang="ts" setup>
	import forgetPassword from './component/forgetPassword.vue'
	import { ref, reactive } from 'vue'

	const forgetV = ref()
	const activeName = ref('first')

	// 表单接口
	interface FormData {
		account : number | null, //账号
		password : string, //密码
		nextPassword ?: string; //确认密码
	}

	// 登录表单数据
	const loginData : FormData = reactive({
		account: null, //账号
		password: '', //密码
	})

	// z表单数据
	const registerData : FormData = reactive({
		account: null, //账号
		password: '', //密码
		nextPassword: '', //确认密码
	})

	// 忘记密码弹窗
	const openForget = () => {
		forgetV.value.open()
	}

	// 
	const handleClick = () => {
		console.log("111");
	}
</script>

<style lang="scss" scoped>
	// 头部
	.header-wrapped {

		// 头部内容
		.header-content {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			// 欢迎语
			.welcome-content {
				font-size: 13px;
			}
		}
	}

	// 主体
	.el-main {
		background-image: url('@/assets/code.jpg');
		height: 600px;
		--el-main-padding: 0;

		// 登录框
		.login-wrapped {
			width: 1200px;
			height: 600px;
			margin: 0 auto;

			// 登录卡片
			.box-card {
				width: 350px;
				height: 375px;
				float: right;
				position: relative;
				top: 14%;

				// 登录表单
				.login-form {

					// 登录底部
					.login-footer {
						display: flex;
						flex-direction: column;

						// 登录按钮
						.login-btn {
							display: flex;
							justify-content: center;
						}

						// 忘记密码
						.forget-password {
							display: flex;
							justify-content: flex-end;
							margin: 10px 0;

							.forget-password-btn {
								font-size: 12px;
								color: #409eff;
								// 鼠标移入的效果
								cursor: pointer;
							}
						}

						// 注册
						.register-btn {
							font-size: 12px;
							margin: 14px 0;
							display: flex;
							justify-content: center;

							.to-register {
								font-size: 12px;
								color: #409eff;
								cursor: pointer;
							}
						}
					}
				}

				// 注册表单
				.register-form {

					// 注册按钮
					.register-btn {
						display: flex;
						justify-content: center;
					}
				}
			}
		}
	}

	// 底部主体
	.footer-wrapped {
		margin-top: 10px;

		// 底部内容
		.footer-content {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;

			// 底部介绍
			.title {
				color: #666;
				font-weight: 500;
				margin: 0 auto;
				font-size: 14px;

				// 除最后一个span外添加间隔内容
				span:not(:last-child)::after {
					content: " | ";
				}
			}
		}
	}

	// tabs标签
	:deep(.el-tabs__item) {
		color: #333;
		font-size: 18px;
	}

	// 表单边距
	.el-form {
		margin-top: 30px;
	}

	// 输入框高度
	:deep(.el-input__inner) {
		height: 40px;
	}

	// 输入框标签字体高度
	:deep(.el-form-item__label) {
		height: 40px;
		line-height: 40px;
	}

	// 登录按钮
	:deep(.el-button) {
		width: 300px;
		height: 45px;
		font-size: 16px;
	}
</style>