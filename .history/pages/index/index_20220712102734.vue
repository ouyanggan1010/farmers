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
        <image class="img" src="../../static/weather/day_yin.png"></image>
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
    <!-- 内容块 -->
  <div class="cnt_chunk">
    <div class="pic_card index_textNum">
      <a href="#" class="list">
        <div class="text">众筹项目</div>
        <div class="num">125</div>
      </a>
      <a href="#" class="list">
        <div class="text">注册用户</div>
        <div class="num">125</div>
      </a>
      <a href="#" class="list">
        <div class="text">供应商</div>
        <div class="num">125</div>
      </a>
    </div>
    <!-- 图标八宫格 -->
    <div class="pic_card titleCnt_card">
      <div class="iconFlex_card">
        <div class="list">
          <a href="#">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-zonghezixun"></span>
              </div>
              <div class="text">综合资讯</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="#">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-nongjifuwu"></span>
              </div>
              <div class="text">农机服务</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="#">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-nonghuoshengchan"></span>
              </div>
              <div class="text">农活生产</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="./agricultural/consult.html">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-nongwuzixun"></span>
              </div>
              <div class="text">农务咨询</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="./plantAssistant/task.html">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-zhongzhizhushou"></span>
              </div>
              <div class="text">种植助手</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="./dataReported/dataReported.html">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-shujushangbao"></span>
              </div>
              <div class="text">数据上报</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="#">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-zhongchouxiangmu"></span>
              </div>
              <div class="text">众筹项目</div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="#">
            <div class="layout">
              <div class="img_or_icon">
                <span class="myicon-jinrongchanp"></span>
              </div>
              <div class="text">金融产品</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 益农信息社 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="only">益农信息社</div>
      </div>
      <!-- 列表 -->
      <div class="text_img_lists">
        <a href="./information/informationDetail.html" class="list">
          <div class="text_oneImg">
            <div class="div_text">
              <div class="div_title">
                市农业农村局召开迎接农村集体产权制度改革验收部署会议市农业农村局召开迎接农村集体产权制度改革验收部署会议
              </div>
              <div class="div_tips">
                <div class="text_mark">
                  <span>2021-12-12</span>
                </div>
              </div>
            </div>
            <div class="div_oneImg">
              <img src="../../images/content_imgs/Bitmap-1.png" alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 品牌列表 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="brand">
          <div class="text">品牌</div>
          <div class="line"></div>
          <span>有故事的好牌子</span>
        </div>
        <a href="#" class="more"><span>全部</span><span class="iconfont icon-icon_arrow_right"></span></a>
      </div>
      <!-- 列表 -->
      <div class="brand_img_lists">
        <div class="list">
          <a href="#" class="brand_story list_child">
            <img src="../../images/content_imgs/Bitmap-2.png" alt="" />
            <div class="position">
              <p>一骑红尘妃子笑</p>
              <div class="tips">品牌故事</div>
            </div>
          </a>
          <div class="brand_look list_child">
            <a href="#" class="link_look">
              <div class="div_text">
                <div class="div_title">
                  市农业农村局召开迎接农村集体产权制度改革验收部署会议市农业农村局召开迎接农村集体产权制度改革验收部署会议
                </div>
                <div class="div_tips">
                  <span>去看看</span>
                  <span class="iconfont icon-jiantou_xiangyouliangci_o"></span>
                </div>
              </div>
            </a>
            <a href="#" class="link_look">
              <div class="div_oneImg">
                <img src="../../images/content_imgs/Bitmap-1.png" alt="" />
              </div>
              <div class="div_text">
                <div class="div_title">
                  市农业农村局召开迎接农村集体产权制度改革验收部署会议市农业农村局召开迎接农村集体产权制度改革验收部署会议
                </div>
                <div class="div_tips">
                  <span>去看看</span>
                  <span class="iconfont icon-jiantou_xiangyouliangci_o"></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 特色项目 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="only">特色项目</div>
        <a href="#" class="more"><span>全部</span><span class="iconfont icon-icon_arrow_right"></span></a>
      </div>
      <!-- 列表 -->
      <div class="features_lists">
        <a href="#" class="list">
          <div class="sort_icon">
            <span>1</span>
            <span>Top</span>
          </div>
          <div class="item_top">
            <p>
              军供食品生猪养殖项目军供食品生猪养殖项目军供食品生猪养殖项目
            </p>
            <div>&nbsp;&nbsp;目标&nbsp;20000元</div>
            <div>剩余25天</div>
          </div>
        </a>
        <a href="#" class="list">
          <div class="sort_icon">
            <span>2</span>
            <span>Top</span>
          </div>
          <div class="item_top">
            <p>
              军供食品生猪养殖项目军供食品生猪养殖项目军供食品生猪养殖项目
            </p>
            <div>&nbsp;&nbsp;目标&nbsp;20000元</div>
            <div>剩余25天</div>
          </div>
        </a>
        <a href="#" class="list">
          <div class="sort_icon">
            <span>3</span>
            <span>Top</span>
          </div>
          <div class="item_top">
            <p>军供食品生猪养殖项目</p>
            <div>&nbsp;&nbsp;目标&nbsp;20000元</div>
            <div>剩余25天</div>
          </div>
        </a>
      </div>
    </div>
    <!-- 特色农产品 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="only">特色农产品</div>
        <a href="#" class="more"><span>全部</span><span class="iconfont icon-icon_arrow_right"></span></a>
      </div>
      <!-- 列表 -->
      <div class="features_agricultural">
        <a href="#" class="list">
          <div class="div_img">
            <img src="../../images/content_imgs/Bitmap-4.png" alt="" />
          </div>
          <div class="price_title_tips">
            <div class="title_tips">
              <!-- 红色的tip -->
              <p class="title">
                猕猴桃猕猴桃猕猴桃猕猴桃猕猴桃猕猴桃猕猴桃猕猴桃
              </p>
              <!-- 蓝色的tip -->
              <div class="tips font_red">附近3用户刚下单</div>
              <!-- <div class="tips font_blue">半年内购买6次</div> -->
            </div>
            <div class="price_weight">
              <div class="price">￥19</div>
              <div class="line">/</div>
              <div class="weight">500g</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 金融服务 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="only">金融服务</div>
        <a href="#" class="more"><span>全部</span><span class="iconfont icon-icon_arrow_right"></span></a>
      </div>
      <!-- 列表 -->
      <div class="financial_services">
        <a href="#" class="list">
          <div class="radius"></div>
          <div class="cnt">
            <div class="text_top">
              <div class="icon_text">
                <span class="iconfont icon-youhuiquan"></span>
                <span>丰收惠</span>
                <span class="iconfont icon-icon_arrow_right"></span>
              </div>
              <p>告别种植风险</p>
            </div>
            <div class="text_bottom">
              <div>6.00%+</div>
              <p>业绩比较基准</p>
            </div>
          </div>
        </a>
        <a href="#" class="list">
          <div class="radius"></div>
          <div class="cnt">
            <div class="text_top">
              <div class="icon_text">
                <span class="iconfont icon-qianbao"></span>
                <span>惠农贷</span>
                <span class="iconfont icon-icon_arrow_right"></span>
              </div>
              <p>告别种植风险</p>
            </div>
            <div class="text_bottom">
              <div>6.00%+</div>
              <p>业绩比较基准</p>
            </div>
          </div>
        </a>
        <a href="#" class="list">
          <div class="radius"></div>
          <div class="cnt">
            <div class="text_top">
              <div class="icon_text">
                <span class="iconfont icon-paichu1"></span>
                <span>丰收惠</span>
                <span class="iconfont icon-icon_arrow_right"></span>
              </div>
              <p>告别种植风险</p>
            </div>
            <div class="text_bottom">
              <div>6.00%+</div>
              <p>业绩比较基准</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 乡村文旅 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="only">乡村文旅</div>
      </div>
      <!-- 列表 -->
      <div class="text_img_lists">
        <a href="#" class="list">
          <div class="imgs_top">
            <img src="../../images/content_imgs/Bitmap-4.png" class="one_big_img" alt="" />
          </div>
          <div class="text_oneImg">
            <div class="div_text">
              <div class="div_title">
                市农业农村局召开迎接农村集体产权制度改革验收部署会议市农业农村局召开迎接农村集体产权制度改革验收部署会议
              </div>
              <div class="div_tips">
                <div class="text_mark">
                  <span class="redText">热门</span>
                  <span>2021-12-12</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 掌上村务 -->
    <div class="pic_card aiticle_text_img">
      <!-- title -->
      <div class="card_title">
        <div class="only">掌上村务</div>
      </div>
      <!-- 列表 -->
      <div class="text_img_lists">
        <a href="#" class="list">
          <div class="text_oneImg">
            <div class="div_text">
              <div class="div_title">
                市农业农村局召开迎接农村集体产权制度改革验收部署会议市农业农村局召开迎接农村集体产权制度改革验收部署会议
              </div>
              <div class="div_tips">
                <div class="text_mark">
                  <span>2021-12-12</span>
                </div>
              </div>
            </div>
            <div class="div_oneImg">
              <img src="../../images/content_imgs/Bitmap-1.png" alt="" />
            </div>
          </div>
        </a>
      </div>
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
