<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="active===index?'active':''" @click="leftClickHandle(index,item.id)" v-for="(item,index) in cates" :key="item.id">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<image :src="item.img_url" @click="previewImg(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: [],
			}
		},
		onLoad() {
			this.getPicsCate();
		},
		methods: {
			//获取左侧点击栏数据
			async getPicsCate() {
				// const res = await this.$myRequest({
				// 	url:'/api/getimgcategory'
				// })
				// console.log(res)
				// this.cates = res.data.message;
				this.cates = [{
						"title": "家居生活",
						"id": 14
					},
					{
						"title": "摄影设计",
						"id": 15
					},
					{
						"title": "明星美女",
						"id": 16
					},
					{
						"title": "空间设计",
						"id": 17
					},
					{
						"title": "户型装饰",
						"id": 18
					},
					{
						"title": "广告摄影",
						"id": 19
					},
					{
						"title": "摄影学习",
						"id": 20
					},
					{
						"title": "摄影器材",
						"id": 21
					},
					{
						"title": "明星写真",
						"id": 22
					},
					{
						"title": "清纯甜美",
						"id": 23
					},
					{
						"title": "古典美女",
						"id": 24
					}
				];
				this.leftClickHandle(0, this.cates[0].id)
			},
			//点击左侧tab
			async leftClickHandle(index, id) {
				this.active = index;
				// const res = await this.$myRequest({
				// 	url:'/api/getimages/'+id,
				// })
				// this.secondData=res.data.message;
				this.secondData = [{
						"id": 40,
						"title": "欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果",
						"img_url": "http://demo.dtcms.net/upload/201504/18/thumb_201504181246376332.jpg",
						"zhaiyao": "继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室。在中国，因为欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果，也吸取了洛可可风格中唯美、律…"
					},
					{
						"id": 41,
						"title": "居住在这样的房子容易出现自杀或血光之灾的现象",
						"img_url": "http://demo.dtcms.net/upload/201504/18/thumb_201504181252034877.jpg",
						"zhaiyao": "1、房屋风水学之地形如果选择在三角形的地方上盖房，此类地方出现自杀现象的机率比较高。如果所住的大楼是呈现三角形的状态，那居住在这样的房子，也是容易出现自杀或血光之灾的现象。2、房屋风水学之电线杆对大门在房屋风水学中，电线杆直对房屋的大门正中或者窗户正中(仅限于…"
					}
				];
			},
			//预览图片
			previewImg(current) {
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				});
			}
		},
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
			}

			.active {
				background: #b50e03;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}

		}
	}
</style>
