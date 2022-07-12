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
