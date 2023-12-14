<template>
	<el-dialog v-model="dialogVisible" title="忘记密码" width="400px">
		<el-form class="login-form">
			<el-form-item label="输入您的注册账号">
				<el-input placeholder="请输入您的注册账号" />
			</el-form-item>
			<el-form-item label="输入您的个人邮箱">
				<el-input  show-password placeholder="请输入您的个人邮箱" />
			</el-form-item>
	</el-dialog>

</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const dialogVisible = ref(true)
</script>

<style lang="scss" scoped>
</style>