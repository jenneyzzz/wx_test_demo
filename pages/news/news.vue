<template>
	<view class="news">
		<news-item :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue';
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad(){
			this.getNews();
		},
		components: {
			"news-item": newsItem
		},
		methods: {
			async getNews() {
				// const res = await this.$myRequest({
				// 	url:'/api/getnewslist'
				// })
				// this.newsList = res.data.message;
				this.newsList = [{
					"id": 13,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 14,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 15,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 16,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 17,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 18,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 19,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				},{
					"id": 20,
					"title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
					"add_time": "2015-04-16T03:50:28.000Z",
					"zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					"click": 1,
					"img_url": "http://demo.dtcms.net/upload/201504/16/201504161149414479.jpg"
				}]
			}
		}
	}
</script>

<style lang="scss">
	.news {
		
	}
</style>
