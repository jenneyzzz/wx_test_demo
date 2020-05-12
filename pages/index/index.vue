<template>
	<view class="home">
		<swiper class="swiper" indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id"><image :src="item.img"></image></swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="toPath(item.path)">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="host_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goodslist"></goods-list>
		</view>
	</view>
</template>

<script>
import goodsList from '../../components/goods-list/goods-list.vue';
export default {
	data() {
		return {
			swipers: [],
			goodslist: [],
			navs: [
				{ icon: 'iconfont icon-ziyuan', title: '黑马超市', path: '/pages/goods/goods' },
				{ icon: 'iconfont icon-guanyuwomen', title: '联系我们', path: '/pages/contact/contact' },
				{ icon: 'iconfont icon-tupian', title: '社区图片', path: '/pages/pics/pics' },
				{ icon: 'iconfont icon-shipin', title: '学习视频', path: '/pages/videos/videos' }
			]
		};
	},
	components: {
		'goods-list': goodsList
	},
	onLoad() {
		this.getSwipers();
		this.getHotGoods();
	},

	methods: {
		// getSwipers() {
		// 	console.log('获取轮播图的数据')
		// uni.request({
		// 	url:"http://localhost:8082/api/getlunbo",
		// 	success:()=>{
		// 		cosole.log(res);
		// 		if(res.data.status!==0){
		// 			return uni.showToast({
		// 				title:'获取数据失败'
		// 			})
		// 		}else{
		// 			this.swipers = res.data.message;
		// 		}
		// 	}
		// })
		// },
		getSwipers() {
			//封装请求后 调轮播接口，使用的是async await方法
			// async getSwipers(){
			// 	const res = await this.$myRequest({
			// 		url:'/api/getlunbo'
			// 	})
			// }
			// this.swipers = res.data.message;

			this.swipers = [
				{
					id: 1,
					url: 'http://www.itcast.cn/subject/phoneweb/index.html',
					img: 'http://m.itheima.com/images/slidead/mobile/20191213180241750x410.jpg'
				},
				{
					id: 2,
					url: 'http://www.itcast.cn/subject/phoneweb/index.html',
					img: 'http://m.itheima.com/images/slidead/mobile/20191210154717750-410.jpg'
				},
				{
					id: 3,
					url: 'http://www.itcast.cn/subject/phoneweb/index.html',
					img: 'http://m.itheima.com/images/slidead/mobile/20190327135101750x410-%E4%BC%A0%E6%99%BA%E9%BB%91%E9%A9%AC%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B9%BB%E7%81%AF.jpg'
				}
			];
		},
		//获取热门商品列表资讯
		async getHotGoods() {
			// const res =await this.$myRequest({
			// 	url:'api/getgoods?pageindex=1'
			// })
			// this.goodslist = res.data.message;
			this.goodslist = [
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 87,
					title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
					add_time: '2015-04-19T16:51:03.000Z',
					zhaiyao: '荣耀6 Plus，该机型分为两款型号，分别为PE-',
					click: 0,
					img_url: 'http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				}
			];
		},
		toPath(url) {
			console.log(url)
			uni.navigateTo({
				url
			});
		}
	}
};
</script>

<style lang="scss">
.home {
	width: 750rpx;
	height: 380rpx;

	image {
		width: 100%;
		height: 100%;
	}
}

.nav {
	display: flex;

	.nav_item {
		width: 25%;
		text-align: center;

		view {
			width: 120rpx;
			height: 120rpx;
			background: #b50e03;
			border-radius: 60px;
			line-height: 120rpx;
			margin: 10px auto;
			color: #fff;
			font-size: 50rpx;
		}

		.icon-tupian {
			font-size: 45rpx;
		}

		text {
			font-size: 30rpx;
		}
	}
}

.host_goods {
	background-color: #eee;
	overflow: hidden;
	margin-top: 10px;

	.tit {
		height: 50px;
		line-height: 50px;
		color: #b50e03;
		text-align: center;
		letter-spacing: 20px;
		background-color: #fff;
		margin: 7rpx 0;
	}

	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}

			.price {
				color: #b50e03;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding: 10rpx 0 15rpx 0;
			}
		}
	}
}
</style>
