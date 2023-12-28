/**
 * 系统设置相关接口
 */

import instance from "@/http/index.js"

// 获取所有轮播图
export const getAllSwiper = () => {
	return instance({
		url: '/setting/getAllSwiper',
		method: 'POST',
	})
}

// 获取公司相关信息
export const getAllCompanyIntroduce = () => {
	return instance({
		url: '/setting/getAllCompanyIntroduce',
		method: 'POST',
	})
}

/**
 * 获取公司相关信息
 * set_name * 标题字段
 * set_text * 内容字段
 */
export const uploadCompanyIntroduce = (set_name, set_text) => {
	return instance({
		url: '/setting/uploadCompanyIntroduce',
		method: 'POST',
		data: {
			set_name,
			set_text
		}
	})
}