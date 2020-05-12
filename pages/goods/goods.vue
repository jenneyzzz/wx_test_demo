<template>
	<view class="goods_list">
		<goods-list :goods="goodslist"></goods-list>
		<view class="isover" v-if="flag">------我是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				goodslist: [],
				pageindex:1,
				flag:false,
			}
		},
		components: {
			"goods-list": goodsList
		},
		onLoad() {
			this.getGoodsList();
		},
		onReachBottom(){
			if(this.goodslist.length<this.pageindex*10){
				return this.flag = true;
			}
			console.log('触底了')
			// this.pageindex++
			// this.getGoodsList();
		},
		methods: {
			//获取商品列表的数据g
			async getGoodsList() {
				// const res =await this.$myRequest({
				// 	url:'api/getgoods?pageindex='+this.pageindex
				// })
				// this.goodslist = [...this.goodslist,...res.data.message];
				this.goodslist = [{
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}, {
					"id": 87,
					"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
					"add_time": "2015-04-19T16:51:03.000Z",
					"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
					"click": 0,
					"img_url": "http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg",
					"sell_price": 2195,
					"market_price": 2499,
					"stock_quantity": 60
				}]
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}
</style>
