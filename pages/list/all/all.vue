<template>
	
	<view class="pages font-style">

    <!-- 顶部导航栏 -->
    <view class="top-bar" v-if="isAnyItemSelected">
      <view class="nav-button left" @click="selectAll">SELECT ALL</view>
      <view class="nav-button right" @click="done">DONE</view>
    </view>
			

	    <!-- 筛选 -->
	    <view class="control-bar">
		    <view class="control-button" :class="{ active: sortByLatest }" @click="toggleSortByLatest">
			  <uni-icons type="refreshempty" size="20"></uni-icons>
			      Latest
		    </view>
		    <view class="control-buttontext" :class="{ active: isListView }" @click="toggleView">
				<uni-icons :type="isListView ? 'list' : 'tune'" size="20"></uni-icons>
		            {{ isListView ? 'List' : 'Filter' }}
	        </view>
	    </view>
		
		<!-- 收藏页面 -->
		<view 
			v-for="(item, index) in sortedGoodsList" 
			:key="item.id"
			class="goods-item-wrap"
			:class="{'selected': selectedItems.includes(item.id)}"
			@click="handleClick(item.id)"
			@longpress="handleLongPress(item.id)"
		  >
			<image v-if="!isListView" :src="item.image" class="goods-image" />

			<view class="goods-content-wrap">
				<view class="goods-name">{{ item.name }}</view>

				<view v-if="!isListView" class="goods-stock-wrap">
					<view class="goods-stock">Main contents extracted from the collection.</view>
				</view>

					<view class="goods-option">
					  <view 
						v-for="(tag, tagIndex) in item.tags" 
						:key="tagIndex" 
						class="goods-option-item"
					  >
						# {{ tag }}
					  </view>
					</view>
				
				<view class="footer">
					<view class="data">{{ item.date }}</view>
				</view>			
			</view>
		</view>
		
		<!-- 底部操作栏 -->
		<view class="bottom-bar" v-if="isAnyItemSelected">
			<view class="action-buttons">
			  <view class="action-button">
				<uni-icons type="compose" size="30"></uni-icons>
			    <view class="bottom-bar-button" @click="editSelected">EDIT</view>
			  </view>
			  <view class="action-button">
				<uni-icons type="link" size="30"></uni-icons>
			    <view class="bottom-bar-button" @click="shareLink">SHARED</view>
			  </view>
			  <view class="action-button">
				<uni-icons type="download" size="30"></uni-icons>
			    <view class="bottom-bar-button" @click="archiveSelected">ARCHIVED</view>
			  </view>
			  <view class="action-button">
				<uni-icons type="trash" size="30" color="red"></uni-icons>
			    <view class="bottom-bar-buttond" @click="deleteSelected">DELETE</view>
			  </view>
		    </view>
		</view>

		
		
		<!-- 灰色背景部分 -->
		<div class="gray-background"></div>
		
        <!-- 编辑弹窗 -->
        <view class="edit-popup" v-if="isEditPopupVisible">
          <view class="edit-popup-content">
            <input v-model="newTitle" placeholder="Enter new title" />
			<view class="row">
				<view class="bottontwo" @click="closeEditPopup">Cancel</view>
				<view class="bottonone" @click="saveTitle">Save</view>
            </view>
		  </view>
        </view>
		
		
		<!-- 分享链接弹窗 -->
		<view class="share-popup" v-if="isSharePopupVisible">
		    <view class="share-popup-content">
				<view class="share-popup-top">
				<image src="/static/pic/link.png" class="share-popup-image"></image>
					<view class="share-popup-text">
						<view class="invite-text">Shared Link</view>
						<view class="link-text">Anyone with the link</view>
					</view>
				</view>
			</view>
		  <button class="share-popup-button" @click="copyLink">Share Link</button>
		  <view class="close-button" @click="closeSharePopup">✖</view>
		</view>
		
	</view>
	    
</template>

<script>
	import CmdIcon from '@/components/cmd-icon/cmd-icon.vue';
	import CmdNavBar from '@/components/cmd-nav-bar/cmd-nav-bar.vue';
	

	export default {
			components: {
				CmdNavBar,
				
		},
		data() {
			return {
				goodsList: [{
						id: 1,
						image: "/static/pic/13.png",
						name: "👋 Title for Collection 1",
						tags: ["Tag1", "Tag2"],
						date: "2021/01/09",
						link: "https://example.com/link1"
					},
					{
						id: 2,
						image: "/static/pic/12.png",
						name: "👋 Title for Collection 2",
					    tags: ["Tag1", "Tag3"],
						date: "2022/01/09",
						link: "https://example.com/link2"

					}
				],
				goodsNav: 1,
		        selectedItems: [],
				isSelectionMode: false,
				isEditPopupVisible: false,
				isSharePopupVisible: false,
				currentLink: '',
				newTitle: '',
				editingItemId: null,
		        startX: 0,
		        startY: 0,
				sortByLatest: true,
				isListView: false,
			}
		},
		onLoad() {

		},
	    computed: {
	      isAnyItemSelected() {
	        return this.selectedItems.length > 0;
	      },
	    
		sortedGoodsList() {
		  let sortedList = [...this.goodsList];
		  if (this.sortByLatest) {
			// 按日期倒序排序
			sortedList.sort((a, b) => new Date(b.date) - new Date(a.date));
		  } else {
			// 按标题字母排序
			sortedList.sort((a, b) => a.name.localeCompare(b.name));
		  }
		  return sortedList;
		}
	  },
		methods: {
			handleClick(id) {
				if (this.isSelectionMode) {
				    this.toggleSelectItem(id);
				} else {
				    uni.navigateTo({
					  url: '/pages/webview/webview?url=https://www.baidu.com'
				    });
				}
			  },
			handleLongPress(id) {
				this.isSelectionMode = true;
				this.toggleSelectItem(id);
			},
			toggleSelectItem(id) {
				const index = this.selectedItems.indexOf(id);
				if (index === -1) {
				    this.selectedItems.push(id);
				} else {
				    this.selectedItems.splice(index, 1);
				}
			  },
		
			startSwipe(event, id) {
			    this.startX = event.touches[0].pageX;
			    this.startY = event.touches[0].pageY;
			},
			moveSwipe(event, id) {
			    const deltaX = event.touches[0].pageX - this.startX;
			    if (Math.abs(deltaX) > 50) {
			    this.selectItem(id);
			    }
			},
			endSwipe(event, id) {
			    this.startX = 0;
			    this.startY = 0;
			    },
			selectAll() {
			    this.selectedItems = this.goodsList.map(item => item.id);
			},
			done() {
			    this.selectedItems = [];
				this.isSelectionMode = false;
			},
		    editSelected() {
		      if (this.selectedItems.length === 1) {
		        this.editingItemId = this.selectedItems[0];
		        const item = this.goodsList.find(item => item.id === this.editingItemId);
		        this.newTitle = item.name;
		        this.isEditPopupVisible = true;
		      } else {
		        alert('Please select exactly one item to edit.');
		      }
		    },
	        saveTitle() {
	          if (this.editingItemId !== null) {
	            const item = this.goodsList.find(item => item.id === this.editingItemId);
	            item.name = this.newTitle;
	            this.isEditPopupVisible = false;
	            this.newTitle = '';
	            this.editingItemId = null;
	          }
	        },
	        closeEditPopup() {
	          this.isEditPopupVisible = false;
	          this.newTitle = '';
	          this.editingItemId = null;
	        },
			shareLink() {
			  if (this.selectedItems.length === 1) {
				const item = this.goodsList.find(item => item.id === this.selectedItems[0]);
				this.currentLink = item.link;
				this.isSharePopupVisible = true;
			  } else {
				alert('Please select exactly one item to share.');
			  }
			},
			copyLink() {
			  const selectedItem = this.goodsList.find(item => item.id === this.selectedItems[0]);
			  if (selectedItem) {
				const link = selectedItem.link;
				this.copyToClipboard(link);
				alert('Link copied to clipboard');
			  }
			  this.isSharePopupVisible = false;
			},
			copyToClipboard(text) {
			  if (navigator.clipboard) {
				navigator.clipboard.writeText(text).catch((err) => {
				  console.error('Could not copy text: ', err);
				});
			  } else {
				const textArea = document.createElement("textarea");
				textArea.value = text;
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				try {
				  document.execCommand('copy');
				  document.body.removeChild(textArea);
				} catch (err) {
				  console.error('Could not copy text: ', err);
				}
				document.body.removeChild(textArea);
			  }
			},
			closeSharePopup() {
			    this.isSharePopupVisible = false;
			},
			archiveSelected() {
				console.log("Archive selected items", this.selectedItems);
			},
			deleteSelected() {
				console.log("Delete selected items", this.selectedItems);
				this.goodsList = this.goodsList.filter(item => !this.selectedItems.includes(item.id));
				this.selectedItems = [];
			},
		
		    toggleSortByLatest() {
		      this.sortByLatest = !this.sortByLatest;
		    },
		    toggleView() {
		      this.isListView = !this.isListView;
		    },
		}
	}
</script>

<style scoped>
	.control-bar {
	  width: 85%;
      height: 14px;
	  margin-left: 18px;
	  margin-top: 10px;
	  border-radius: 40rpx;
	  background-color: #E4E4E5;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  padding: 12px;
	  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.control-button {
	  width: 95%;
	  height: 14px;
	  border-radius: 35rpx;
	  font-size: 14px;
	  cursor: pointer;
	  padding: 8px 16px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background-color: #E4E4E5;
	}
	.control-button.active {
	  background-color: #ffffff;
	}
	.control-buttontext {
	  width: 95%;
	  height: 14px;
	  border-radius: 40rpx;
	  font-size: 14px;
	  cursor: pointer;
	  padding: 8px 16px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background-color: #E4E4E5;
	}
	.control-buttontext.active {
	  background-color: #E4E4E5;
	}
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
	  padding: 8rpx 16rpx;
	  border-radius: 36rpx;
	  font-size: 22rpx;
	  margin-top: 24rpx;
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


	
	.goods-item-wrap.selected {
	  background-color: #CEE4FF;
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
	.top-bar {
	  display: flex;
	  justify-content: space-between;
	  background-color: #fff;
	  padding: 10rpx;
	  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	  position: fixed;
	  top: 0;
	  height: 35px;
	  left: 0;
	  width: 100%;
	  z-index: 1000;
	}
	.nav-button {
	  color: #007bff;
	  height: 33px;
	  margin-top: -10px;
	  padding: 10rpx 20rpx;
	  border: none;
	  border-radius: 15rpx;
      font-size: 28rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-weight: bold;

	}
	.nav-button.left {
	  margin-left: 10px;
	}
	.nav-button.right {
	  margin-right: 10px;
	}
	
	.bottom-bar {
	  justify-content: center;
	  background-color: #fff;
	  padding: 10rpx;
	  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
	  position: fixed;
	  bottom: 40px;
	  left: 40px;
	  width: 80%;
	  z-index: 1008;
	  border-radius: 20rpx;
	}

	.action-buttons {
	  background-color: #fff;
	  border: none;
	  border-radius: 10rpx;
	  padding: 10rpx;
	  display: flex;
	  justify-content: center;
	}
	.action-button {
		margin-top: -2px;
	    display: flex;
	    justify-content: space-around;
	    align-items: center;
	    width: 100%;
	    padding: 10rpx 0;
	    background-color: #fff;
	    border-top-left-radius: 20rpx;
	    border-top-right-radius: 20rpx;
		flex-direction: column;
	}
	
	.action-buttons .bottom-bar-button uni-icons {
	    margin-bottom: 1rpx; /* 图标与文本之间的间距 */
	    color: #fff;
	}
	.bottom-bar-button {
	  background-color: transparent;
	  color: #000;
	  width: 60px;
	  height: 10px;
	  padding: 10rpx 10rpx;
	  border: 2px solid transparent;
	  border-radius: 15rpx;
	  font-size: 20rpx;
	  cursor: pointer;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.bottom-bar-buttond {
	  background-color: transparent;
	  color: red;
	  width: 60px;
	  height: 10px;
	  padding: 10rpx 10rpx;
	  border: 2px solid transparent;
	  border-radius: 15rpx;
	  font-size: 20rpx;
	  cursor: pointer;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}


	.edit-popup {
	  position: fixed;
	  width: 250px;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  background: #fff;
	  padding: 20px;
	  border-radius: 10px;
	  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	  z-index: 1001;
	}

	.edit-popup-content {
	  display: flex;
	  flex-direction: column;
	}

	.edit-popup-content input {
	  margin-bottom: 20px;
	  padding: 10px;
	  font-size: 16px;
	  border: 1px solid #ccc;
	  border-radius: 10px;
	}

	.edit-popup-buttons {
	  display: flex;
	  justify-content: space-between;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.edit-popup-content view{
	  height: 20px;
	  width: 60px;
      color: #6c757d;
	  padding: 10px;
	  margin-bottom: -5px;
	  font-size: 17px;
	  margin-left: 30px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-weight: bold;
	}
	.edit-popup-content view:nth-child(2) {
	  height: 20px;
	  width: 60px;
	  color: #007bff;
	  margin-bottom: -5px;
	  margin-left: 70px ;
	  padding: 10px;
	  font-size: 17px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-weight: bold;
	}

	/* Share popup styles */
	.share-popup {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  width: 90%;
	  background: #fff;
	  padding: 20px;
	  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
	  border-top-left-radius: 10px;
	  border-top-right-radius: 10px;
	  z-index: 1009;
	}

	.share-popup-content {
	  display: flex;
	  align-items: center;
	}

	.share-popup-top {
	  display: flex;
	  align-items: center;
	  margin-bottom: 20rpx;
	}

	.share-popup-image {
	  width: 60px;
	  height: 60px;
	  margin-right: 20px;
	  border-radius: 10px;
	}

	.share-popup-text {
	  flex: 1;
	}

	.invite-text {
	  font-size: 16px;
	  font-weight: bold;
	}

	.link-text {
	  font-size: 16px;
	  color: #6c757d;
	}

	.share-popup-button {
	  margin-top: 15px;
	  height: 50px;
	  background-color: #007bff;
	  color: #fff;
	  padding: 10px 20px;
	  border: none;
	  border-radius: 10px;
	  font-size: 16px;
	  cursor: pointer;
	  flex-direction: column;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.close-button {
	  position: absolute;
	  top: 10rpx;
	  right: 10rpx;
	  background: none;
	  border: none;
	  font-size: 24rpx;
	  cursor: pointer;
	  margin-top: 5px;
	  margin-right: 5px;
	}
</style>
