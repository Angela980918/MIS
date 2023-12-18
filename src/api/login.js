import instance from "@/http/index.js"

// 注册
export const register = data => {
	const {
		account,
		password
	} = data
	console.log(account, password);
	return instance({
		url: '/api/register',
		method: 'POST',
		data: {
			account,
			password
		}
	})
}
