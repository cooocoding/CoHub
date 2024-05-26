<template>
	<view class="nav-bar-placeholder"></view>
	<view class="pages font-style">
			
		<!-- 收藏夹名 -->
		<view class="goods-header-wrap">
			<view class="goods-header-item" :class="{'goods-header-item-action' : 1 == goodsNav}" >Folder Name</view>
		</view> 
		<!-- 收藏夹名 -->

		<!-- 收藏页面 -->
		<view v-for="(item, index) in goodsList" class="goods-item-wrap" @click="selectTap(item.id)">
			<image :src="item.image" class="goods-image" />

			<view class="goods-content-wrap">
				<view class="goods-name">{{ item.name }}</view>

				<view class="goods-stock-wrap">
					<view class="goods-stock">Main contents extracted from the collection.</view>
				</view>

				<view class="goods-option" @click.stop="">
					<view class="goods-option-item" @tap="editPrice(item.id)"># Tag1</view>
					<view class="goods-option-item" @tap="editStock(item.id)"># Tag2</view>
					<view class="goods-option-item" @tap="editStock(item.id)"># Tag3</view>
				</view>
				
				<view class="footer">
					<view class="data">2022/01/09</view>
				</view>
				
			</view>

		</view>
		<!-- 收藏页面 -->

		<!-- 添加 -->
		<view class="publish-goods-wrap">
			<view class="publish-goods-btn" @click="addGoods()">➕</view>
		</view>
		<!-- 添加 -->
		
		<!-- 灰色背景部分 -->
		<div class="gray-background"></div>
	</view>
</template>

<script>
	import CmdIcon from '@/components/cmd-icon/cmd-icon.vue';
	import CmdNavBar from '@/components/cmd-nav-bar/cmd-nav-bar.vue';

	export default {
			components: {
				CmdNavBar
		},
		data() {
			return {
				goodsList: [{
						id: 1,
						image: "/static/pic/13.png",
						name: "👋 Title for Collection 1"
					},
					{
						id: 2,
						image: "/static/pic/12.png",
						name: "👋 Title for Collection 2"
					}
				],
				goodsNav: 1
			}
		},
		onLoad() {

		},
		methods: {
			selectTap(id) {
				console.log("tap item id:" + JSON.stringify(id));
				    // 在这里添加页面跳转代码
				    uni.navigateTo({
				        url: '/pages/webview/webview?url=https://www.baidu.com'
				    });
			},
			addGoods() {
				console.log("tap add new Collections");
			},
		}
	}
</script>

<style scoped>
	.pages {
		background-color: #F2F2F6;
	}
	.goods-main {
		min-height: 100vh;
		background: #F2F2F6;
		padding-top: 10rpx;
		padding-bottom: 240rpx;
	}

	.goods-item-wrap {
		background: #FFFFFF;
		display: flex;
		padding: 30rpx;
		margin: 30rpx;
		border-radius: 20rpx;
	}

	.goods-content-wrap {
		padding-left: 24rpx;
		flex: 1;
	}

	.goods-option {
		display: flex;
	}

	.goods-option-item {
		background: #f4f4f6;
	}

	.goods-image {
		width: 170rpx;
		height: 170rpx;
		border-radius: 15rpx;
		margin-top: 0.3cm;
		margin-right: 0.3cm;
		flex: none;
	}

	.goods-name {
		font-size: 38rpx;
		font-weight: bold;
	}

	.goods-stock-wrap {
		display: flex;
		color: #969696;
		font-size: 26rpx;
		margin-top: 14rpx;
	}

	.goods-stock {
		margin-right: 24rpx;
	}

	.goods-option-item {
		padding: 8rpx 16rpx;
		border-radius: 36rpx;
		font-size: 22rpx;
		margin-top: 24rpx;
	}

	.goods-option-item:not(:last-child) {
		margin-right: 30rpx;
	}

	.goods-item-wrap {
		margin-top: 25rpx;
		margin-bottom: 20rpx;
	}

	.goods-header-wrap {
		display: flex;
		align-items: center;
		padding: 24rpx;
		background: #FFFFFF;
	}

	.goods-header-item-action {
		font-size: 50rpx;
		font-color: #000;
		font-weight: bold;
		align-content: center;
	}

	.nav-bar-placeholder {
	  height: 52px; /* 导航栏的高度 */
	}

	.goods-header-item {
		margin-right: 24rpx;
	}

	.publish-goods-wrap {
		background: rgba(255, 255, 255, .5);
		padding: 23rpx;
		position: fixed;
		bottom: 23rpx;
		right: 23rpx;
		z-index: 1000; 
	}

	.publish-goods-btn {
		background: #fff;
		color: #F2F2F6;
		width: 100rpx; 
		height: 100rpx; 
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%; 
		font-size: 32rpx; 
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
	}
	
	.footer {
		display: flex;
		color: #969696;
		font-size: 24rpx;
		margin-top: 20rpx;
		justify-content: flex-end;
	}
	
	.date {
		margin-right: 24rpx;
	}

	
	.gray-background {
	  background-color: #F2F2F6; 
	  height: 100%; 
	  width: 100%; 
	  position: fixed; 
	  top: 0; 
	  left: 0; 
	  z-index: -1;
	}
</style>
