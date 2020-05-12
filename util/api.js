const BASE_URL = 'http://localhost:8082';
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			succuss: (res) => {
				if (res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err);
			}
		})
	})
}
//可以把所有的请求封装到这里，方便查找所有的接口，也方便改动
