<template>
	<el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="400px" align-center center>
		<el-form :rules="rules" class="forget-form" :label-position="labelposition">
			<el-form-item label="账号" prop="account">
				<el-input v-model="forgetFrom.account" placeholder="请输入您的注册账号" />
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="forgetFrom.email" show-password placeholder="请输入您的个人邮箱" />
			</el-form-item>
		</el-form>

		<!-- 底部内容 -->
		<template #footer>
			<span class="dialog-footer">
				<el-button>Cancel</el-button>
				<el-button type="primary">
					Confirm
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
	import { ref, reactive } from 'vue'

	// 表单对齐方式
	const labelposition = ref('top')

	// forget表单接口
	interface forgetData {
		account : number; // 账号
		email : string;	// 邮箱
		password : string; // 密码
		nextPassword : string; // 确认密码
	}

	// forget表单对象
	const forgetFrom : forgetData = reactive({
		account: null,
		email: '',
		password: '',
		nextPassword: ''
	})

	// 表单规则
	const rules = reactive({
		account: [
			{ required: true, message: '请输入您的注册账号', trigger: 'blur' },
		],
		email: [
			{ required: true, message: '请输入您的注册邮箱', trigger: 'blur' },
		],
		password: [
			{ required: true, message: '请输入您想修改的密码', trigger: 'blur' },
		],
		nextPassword: [
			{ required: true, message: '请再次确认您的新密码', trigger: 'blur' },
		],

	})

	// 控制弹窗 默认关闭
	const state = reactive({
		forgetPasswordDialog: false,
		changePasswordDialog: false,
	})

	// 打开弹窗
	const open = () => {
		state.forgetPasswordDialog = true
	}

	// 对外暴露子组件方法
	defineExpose({
		open
	})
</script>

<style lang="scss" scoped>
</style>