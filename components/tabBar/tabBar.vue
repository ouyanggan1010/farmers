<template>
  <view class="tab-bar">
    <navigator
      :url="item.pagePath"
      open-type="switchTab"
      hover-class="none"
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
    >
      <view class="tab_img_chunk"
        ><image
          class="tab_img"
          :src="selected === index ? item.selectedIconPath : item.iconPath"
        ></image
      ></view>
      <view
        class="tab_text"
        :style="{ color: selected === index ? selectedColor : color }"
        >{{ item.text }}</view
      >
    </navigator>
  </view>
</template>

<script>
export default {
  name: "tabBar",
  props: {
    selected: {
      // 当前选中的tab index
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      color: "#9B9B9B",
      selectedColor: "#0091FF",
      imgSrc: require("@/static/tabs/index.png"),
      list: [
        {
          text: "首页",
          pagePath: "/pages/index/index",
          iconPath: require("@/static/tabs/index.png"),
          selectedIconPath: require("@/static/tabs/index-active.png"),
        },
        {
          text: "新农村",
          pagePath: "/pages/newrural/newrural",
          iconPath: require("@/static/tabs/newrural.png"),
          selectedIconPath: require("@/static/tabs/newrural-active.png"),
        },
        {
          text: "农品汇",
          pagePath: "/pages/farmers/farmers",
          iconPath: require("@/static/tabs/farmers.png"),
          selectedIconPath: require("@/static/tabs/farmers-active.png"),
        },
        {
          text: "我的",
          pagePath: "/pages/my/my",
          iconPath: require("@/static/tabs/my.png"),
          selectedIconPath: require("@/static/tabs/my-active.png"),
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 15.3846vw;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  border-top: 0.2564vw solid #f6f6f6;
  z-index: 2;
  overflow: hidden;

  .tab-bar-item {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .tab_img_chunk {
      width: 6.1538vw;
      height: 6.1538vw;
      position: relative;
    }

    .tab_img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10.2564vw;
      height: 10.2564vw;
    }

    .tab_text {
      font-size: 3.0769vw;
      margin-top: 0.7692vw;
    }
  }
}
</style>
