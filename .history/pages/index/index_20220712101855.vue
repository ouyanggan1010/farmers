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
    <div class="weather">
      <div class="pic_img">
        <img src="../../images/content_imgs/whear.png" alt="" />
      </div>
      <div class="text_list">
        <div class="quality">
          <div>阴&nbsp;21 ~ 30℃</div>
        </div>
        <div>南风3级&nbsp;&nbsp;湿度：58%</div>
        <div>气压：1010hpa</div>
      </div>
      <div class="text_list">
        <div class="quality">
          <div>空气质量：</div>
          <div class="mark">优</div>
        </div>
        <div>PM2.5</div>
        <div>水温：20℃</div>
      </div>
    </div>
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
