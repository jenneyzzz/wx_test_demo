<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090</view>
			<view>校区地址：深圳市粤海大道海王大厦A座同步齿科17F</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
export default {
	data() {
		return {
			longitude: 113.933206,
			latitude: 22.521532,
			scale:13,
			markers: [
				{
					longitude: 113.933206,
					latitude: 22.521532,
					iconPath: '../../static/hmlogo.png',
					width:30,
					height:30
				}
			]
		};
	},
	methods: {
		phone(){
			uni.makePhoneCall({
			    phoneNumber: '18588441312' ,//仅为示例
				
				
			});
		}
	}
};
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
		height: 320rpx;
	}
}
.info {
	padding: 10rpx 20rpx;
	font-size: 30rpx;
	view {
		line-height: 60rpx;
		border-bottom: 1px solid #eee;
	}
}
.map {
	width: 750rpx;
	height: 750rpx;
}
</style>
