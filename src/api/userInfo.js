/**
 * 用户信息相关接口
 */

import instance from "@/http/index.js"

// 获取用户信息 ID
export const getUserInfo = (id) => {
	return instance({
		url: '/user/getUserInfo',
		method: 'POST',
		data: {
			id
		}
	})
}

// 绑定图片地址跟账号
export const bindAccount = (account, onlyId, url) => {
	return instance({
		url: '/user/bindAccount',
		method: 'POST',
		data: {
			account,
			onlyId,
			url
		}
	})
}

// 修改密码(旧密码 -> 新密码)
export const changePassword = (id, newPassword, oldPassword) => {
	return instance({
		url: '/user/changePassword',
		method: 'POST',
		data: {
			id,
			newPassword,
			oldPassword
		}
	})
}

// 修改姓名 id name
export const changeName = (id, name) => {
	return instance({
		url: '/user/changeName',
		method: 'POST',
		data: {
			id,
			name
		}
	})
}

// 修改性别 id sex
export const changeSex = (id, sex) => {
	return instance({
		url: '/user/changeSex',
		method: 'POST',
		data: {
			id,
			sex
		}
	})
}

// 修改邮箱 id email
export const changeEmail = (id, email) => {
	return instance({
		url: '/user/changeEmail',
		method: 'POST',
		data: {
			id,
			email
		}
	})
}

/**
 * 修改用户信息 
 *  id 用户ID (*)
 *  name 用户名
 *  identity 身份
 *  department 所属部门
 *  sex 性别
 *  email 邮箱
 */
export const updateUserInfo = (params) => {
	const {
		id = null, name = null, identity = null, department = null, sex = null, email = null
	} = params;

	const data = {};
	if (id !== null) data.id = id;
	if (name !== null) data.name = name;
	if (identity !== null) data.identity = identity;
	if (department !== null) data.department = department;
	if (sex !== null) data.sex = sex;
	if (email !== null) data.email = email;

	return instance({
		url: '/user/updateUserInfo',
		method: 'POST',
		data,
	})
}