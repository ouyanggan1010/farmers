<template>
  <view class="index_content tab_bar">
    <!-- 搜索框 -->
    <view class="index_search">
      <view class="common_search">
        <input type="text" placeholder="请输入文本" />
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
