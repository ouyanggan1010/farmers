<template>
  <view class="index_content tab_bar">
    <!-- 搜索框 -->
    <view class="index_search">
      <view class="common_search">
        <text class="myicon-whiteSearch"></text>
        <input type="text" class="searchInp" />
        <text class="myicon-whiteSource"></text>
      </view>
    </view>
    <!-- 定位地址与日期 -->
    <view class="position_time">
      <text id="city">海口市</text>
      <text class="line"></text>
      <text id="date_week">2021.05.12 星期五</text>
      <text class="myicon-whiteDingwei dingwei"></text>
    </view>
    <!-- 天气 -->
    <view class="weather">
      <view class="pic_img">
        <img src="../../images/content_imgs/whear.png" alt="" />
      </view>
      <view class="text_list">
        <view class="quality">
          <view>阴&nbsp;21 ~ 30℃</view>
        </view>
        <view>南风3级&nbsp;&nbsp;湿度：58%</view>
        <view>气压：1010hpa</view>
      </view>
      <view class="text_list">
        <view class="quality">
          <view>空气质量：</view>
          <view class="mark">优</view>
        </view>
        <view>PM2.5</view>
        <view>水温：20℃</view>
      </view>
    </view>
    <!-- tab-bar -->
    <tabBar :selected="0"></tabBar>
  </view>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>

<style></style>
