<!-- 系统设置 -->
<template>
	<BreadCrumb ref="breadcrumb" :item='item' />
	<div class="common-wrapped">
		<div class="common-content">
			<el-tabs v-model="activeName" class="demo-tabs">
				<el-tab-pane label="账号详情" name="first">
					<div class="account-info-wrapped">
						<span>用户头像：</span>
						<div class="account-info-content">
							<el-upload class="avatar-uploader" action="http://127.0.0.1:3007/user/uploadAvatar"
								:show-file-list="false" :on-success="handleAvatarSuccess"
								:before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar" />
								<el-icon v-else class="avatar-uploader-icon">
									<Plus />
								</el-icon>
							</el-upload>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="Config" name="second">Config</el-tab-pane>
				<el-tab-pane label="Role" name="third">Role</el-tab-pane>
				<el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		onMounted,
		reactive,
		ref,
		nextTick,
		toRaw
	} from 'vue'
	import BreadCrumb from '@/components/BreadCrumb.vue'
	import {
		ElMessage
	} from 'element-plus'
	import {
		Plus
	} from '@element-plus/icons-vue'
	import type {
		UploadProps
	} from 'element-plus'

	// 默认页
	const activeName = ref('first')

	// 面包屑
	const breadcrumb = ref()

	// 面包屑参数
	const item = ref({
		first: '系统设置',
	})

	const imageUrl = ref('')
	// 头像上传成功的函数 response回应
	const handleAvatarSuccess: UploadProps['onSuccess'] = (
		response,
		uploadFile
	) => {
		imageUrl.value = URL.createObjectURL(uploadFile.raw!)
	}
	// 头像上传之前的函数
	const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
		if (rawFile.type !== 'image/jpeg') {
			ElMessage.error('头像必须是jpg格式!')
			return false
		} else if (rawFile.size / 1024 / 1024 > 2) {
			ElMessage.error('头像必须小于2MB!')
			return false
		}
		return true
	}
</script>

<style lang="scss" scoped>
	// 外壳
	.common-wrapped {
		padding: 8px;
		background: #f5f5f5;
		// 计算 减去了头部还有面包屑 + 2X8=16边距
		height: calc(100vh - 101px);

		// 内容
		.common-content {
			padding: 0 10px;
			height: 100%;
			background: #fff;

			// 账号信息外壳
			.account-info-wrapped {
				display: flex;
				align-items: center;
				padding-left: 50px;
				margin-bottom: 24px;
				font-size: 14px;

				// 账号信息内容
				.account-info-content {
					margin-left: 24px;
					margin-right: 16px;
				}

				// 按钮
				.account-save-button {
					margin-left: 16px;
				}

			}
		}
	}

	// 上传头像
	.avatar-uploader .avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed var(--el-border-color);
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: var(--el-transition-duration-fast);
	}

	.avatar-uploader .el-upload:hover {
		border-color: var(--el-color-primary);
	}

	.el-icon.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		text-align: center;
	}
</style>
