<template>
	<view class="index_content tab_bar" :style="{'--statusbar':statusBar+'px'}">
		<!-- 背景 -->
		<view class="bgBlue"></view>
		<!-- 搜索框 -->
		<view class="index_search" :style="{'--bgsearch':`rgba(0,145,255,${searchBG})`}">
			<view class="common_search">
				<text class="myicon-whiteSearch"></text>
				<input type="text" class="searchInp" />
				<text class="myicon-whiteSource"></text>
			</view>
		</view>
		<!-- 定位地址与日期 -->
		<view class="position_time">
			<text id="city">{{ locationInfo.city }}</text>
			<text class="line"></text>
			<text id="date_week">{{ nowDate.date }} {{ nowDate.week }}</text>
			<text class="myicon-whiteDingwei dingwei"></text>
		</view>
		<!-- 天气 -->
		<view class="weather">
			<view class="pic_img"><image class="img" mode="aspectFit" :src="`../../static/weather/${todayWeather.wea_day_img}.png`"></image></view>
			<view class="text_list">
				<view class="quality">{{ todayWeather.wea }}</view>
				<view>{{ todayWeather.tem2 }} ~ {{ todayWeather.tem1 }}</view>
				<view>{{ todayWeather.win ? todayWeather.win[0] : '' }}&nbsp;&nbsp;{{ todayWeather.win_speed }}</view>
			</view>
			<view class="text_list">
				<view class="quality">
					<view>空气质量：</view>
					<view class="mark">{{ todayWeather.air_level }}</view>
				</view>
				<view>气压hPa：{{ todayWeather.pressure }}</view>
				<view>湿度：{{ todayWeather.humidity }}</view>
			</view>
		</view>
		<!-- 内容块 -->
		<view class="cnt_chunk">
			<view class="pic_card index_textNum">
				<navigator :url="item.link" class="list" v-for="(item, index) in numTabs" :key="index">
					<view class="text">{{ item.name }}</view>
					<view class="num">{{ item.num }}</view>
				</navigator>
			</view>
			<!-- 图标八宫格 -->
			<view class="pic_card titleCnt_card">
				<view class="iconFlex_card">
					<view class="list" v-for="(tab, k) in sudokuData" :key="k">
						<navigator :url="tab.link" class="chunk">
							<view class="layout">
								<view class="img_or_icon"><text :class="tab.pic"></text></view>
								<view class="text">{{ tab.name }}</view>
							</view>
						</navigator>
					</view>
				</view>
			</view>
			<!-- 益农信息社 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="only">益农信息社</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="text_img_lists">
					<navigator :url="society.link" class="list" v-for="(society, j) in societyArr" :key="j">
						<view class="text_oneImg">
							<view class="view_text">
								<view class="view_title">{{ society.title }}</view>
								<view class="view_tips">
									<view class="text_mark">
										<text>{{ society.date }}</text>
									</view>
								</view>
							</view>
							<view class="view_oneImg"><image class="img" mode="aspectFit" :src="society.pic"></image></view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 品牌列表 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="brand">
						<view class="text">品牌</view>
						<view class="line"></view>
						<text>有故事的好牌子</text>
					</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="brand_img_lists">
					<view class="list" v-for="(brand, b) in brandStory" :key="b">
						<navigator :url="brand.link" class="brand_story list_child" v-if="b % 2 == 0">
							<image class="img" mode="scaleToFill" :src="brand.big.pic"></image>
							<view class="position">
								<view class="title">{{ brand.big.title }}</view>
								<view class="tips">品牌故事</view>
							</view>
						</navigator>
						<view class="brand_look list_child">
							<navigator :url="small.link" class="link_look" v-for="(small, s) in brand.small" :key="s">
								<view class="view_oneImg" v-if="s == 1"><image class="img" mode="scaleToFill" :src="small.pic"></image></view>
								<view class="view_text">
									<view class="view_title">{{ small.title }}</view>
									<view class="view_tips">
										<text>去看看</text>
										<text class="iconfont">>></text>
									</view>
								</view>
							</navigator>
						</view>
						<navigator :url="brand.link" class="brand_story list_child" v-if="b % 2 != 0">
							<image class="img" mode="scaleToFill" :src="brand.big.pic"></image>
							<view class="position">
								<view class="title">{{ brand.big.title }}</view>
								<view class="tips">品牌故事</view>
							</view>
						</navigator>
					</view>
				</view>
			</view>
			<!-- 特色项目 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="only">特色项目</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="features_lists">
					<navigator :url="feature.link" class="list" v-for="(feature, f) in featuresArr" :key="f">
						<view class="sort_icon">
							<text>{{ f + 1 }}</text>
							<text>Top</text>
						</view>
						<view class="item_top">
							<view class="title">{{ feature.title }}</view>
							<view class="price">目标{{ feature.price }}元</view>
							<view class="day">剩余{{ feature.day }}天</view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 特色农产品 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="only">特色农产品</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="features_agricultural">
					<navigator url="/pages/shopDetail/shopDetail" class="list" v-for="(product, p) in agriculturalArr" :key="p">
						<view class="view_img"><image class="img" mode="scaleToFill" :src="product.pic"></image></view>
						<view class="price_title_tips">
							<view class="title_tips">
								<view class="title">{{ product.title }}</view>
								<!-- 红色的tip -->
								<!-- <view class="tips font_red">附近3用户刚下单</view> -->
								<!-- 蓝色的tip -->
								<!-- <view class="tips font_blue">半年内购买6次</view> -->
							</view>
							<view class="price_weight">
								<view class="price">￥{{ product.price }}</view>
								<view class="line">/</view>
								<view class="weight">{{ product.unit }}</view>
							</view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 金融服务 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="only">金融服务</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="financial_services">
					<navigator :url="loan.link" class="list" v-for="(loan, l) in financialArr" :key="l">
						<view class="radius"></view>
						<view class="cnt">
							<view class="text_top">
								<view class="icon_text">
									<text class="iconfont" :class="loan.pic"></text>
									<text>{{ loan.title }}</text>
									<text class="iconfont">></text>
								</view>
								<view class="title">{{ loan.tips }}</view>
							</view>
							<view class="text_bottom">
								<view class="num">{{ loan.yield }}+</view>
								<view class="text">{{ loan.note }}</view>
							</view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 乡村文旅 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="only">乡村文旅</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="text_img_lists">
					<navigator url="" class="list" v-for="(brigade, k) in brigadeArr" :key="k">
						<view class="imgs_top"><image class="one_big_img" mode="scaleToFill" :src="brigade.pic"></image></view>
						<view class="text_oneImg">
							<view class="view_text">
								<view class="view_title">{{ brigade.title }}</view>
								<view class="view_tips">
									<view class="text_mark">
										<!-- <text class="redText">热门</text> -->
										<text>{{ brigade.date }}</text>
									</view>
								</view>
							</view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 掌上村务 -->
			<view class="pic_card aiticle_text_img">
				<!-- title -->
				<view class="card_title">
					<view class="only">掌上村务</view>
					<navigator url="" class="more">
						<text>全部</text>
						<text class="iconfont">></text>
					</navigator>
				</view>
				<!-- 列表 -->
				<view class="text_img_lists">
					<navigator :url="handheld.link" class="list" v-for="(handheld, i) in handheldArr" :key="i">
						<view class="text_oneImg">
							<view class="view_text">
								<view class="view_title">{{ handheld.title }}</view>
								<view class="view_tips">
									<view class="text_mark">
										<text>{{ handheld.date }}</text>
									</view>
								</view>
							</view>
							<view class="view_oneImg"><image class="img" mode="scaleToFill" :src="handheld.pic"></image></view>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 这个是底线 -->
			<view class="dead_line">没有更多内容啦</view>
		</view>
		<!-- tab-bar -->
		<tabBar :selected="0"></tabBar>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'index',
	data() {
		return {
			// 头部搜索的背景色变化
			searchBG: 0,
			// 头部搜索的高度
			searchHeightEle: 0,
			// 众筹项目、注册用户、供应商
			numTabs: [
				{
					name: '众筹项目',
					num: 155,
					link: ''
				},
				{
					name: '注册用户',
					num: 2435,
					link: ''
				},
				{
					name: '供应商',
					num: 178,
					link: ''
				}
			],
			// 宫格
			sudokuData: [
				{
					pic: 'myicon-zonghezixun',
					name: '综合咨询',
					link: ''
				},
				{
					pic: 'myicon-nongjifuwu',
					name: '农机服务',
					link: ''
				},
				{
					pic: 'myicon-nonghuoshengchan',
					name: '农活生产',
					link: ''
				},
				{
					pic: 'myicon-nongwuzixun',
					name: '农务咨询',
					link: ''
				},
				{
					pic: 'myicon-zhongzhizhushou',
					name: '种植助手',
					link: ''
				},
				{
					pic: 'myicon-shujushangbao',
					name: '数据上报',
					link: ''
				},
				{
					pic: 'myicon-zhongchouxiangmu',
					name: '众筹项目',
					link: ''
				},
				{
					pic: 'myicon-jinrongchanp',
					name: '金融产品',
					link: ''
				}
			],
			// 益农信息社
			societyArr: [
				{
					title: '市农业农村局召开迎接农村集体产权制度改革验收部署会议市农业农村局召开迎接农村集体产权制度改革验收',
					pic: require('../../static/images/Bitmap-1.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '海口市农业农村局召开2020年度总结表彰大会',
					pic: require('../../static/images/Bitmap-2.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '市农技中心调查槟榔异常情况并开展技术指导',
					pic: require('../../static/images/Bitmap-3.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '深圳六旬老汉不配合检疫检查还咬伤警察，获刑9个月',
					pic: require('../../static/images/Bitmap-4.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '上海首例高空抛物入刑案：头顶的安全离不开守法与善行',
					pic: require('../../static/images/Bitmap-5.png'),
					date: '2021-08-11',
					link: ''
				}
			],
			// 品牌故事
			brandStory: [
				{
					big: {
						title: '一骑红尘妃子笑',
						pic: require('../../static/images/brand-1-big.png'),
						link: ''
					},
					small: [
						{
							title: '意大利累计确诊12462例，宣布关闭除食品',
							pic: '',
							link: ''
						},
						{
							title: '曝光！桶装水、食品、生活用品等多项',
							pic: require('../../static/images/brand-1-small.png'),
							link: ''
						}
					]
				},
				{
					big: {
						title: '榴芒夫妇晋级！特惠',
						pic: require('../../static/images/brand-2-big.png'),
						link: ''
					},
					small: [
						{
							title: '你是非常可爱的人，真应该遇到最好的',
							pic: '',
							link: ''
						},
						{
							title: '曝光！桶装水、食品、生活用品等多项',
							pic: require('../../static/images/brand-2-small.png'),
							link: ''
						}
					]
				},
				{
					big: {
						title: '来自星星的霸气蕉蕉',
						pic: require('../../static/images/brand-3-big.png'),
						link: ''
					},
					small: [
						{
							title: '意大利累计确诊12462例，宣布关闭除食品',
							pic: '',
							link: ''
						},
						{
							title: '曝光！桶装水、食品、生活用品等多项',
							pic: require('../../static/images/brand-3-small.png'),
							link: ''
						}
					]
				}
			],
			// 特色项目
			featuresArr: [
				{
					title: '军供食品生猪养殖项目',
					price: 2000,
					day: 15,
					link: ''
				},
				{
					title: '山那边的希望-为五指山贫困儿童众筹铅笔',
					price: 3000,
					day: 20,
					link: ''
				},
				{
					title: '海南火山互联网农业小镇中众筹项目',
					price: 2000,
					day: 25,
					link: ''
				}
			],
			// 特色农产品
			agriculturalArr: [
				{
					pic: require('../../static/images/shop-1.png'),
					title: '日本进口小青瓜',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-2.png'),
					title: '西兰花',
					price: 3,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-3.png'),
					title: '樱桃萝卜',
					price: 2,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-4.png'),
					title: '新西兰奇异果',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-5.png'),
					title: '樱桃萝卜',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-6.png'),
					title: '新西兰奇异果',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-7.png'),
					title: '柚子',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-8.png'),
					title: '薄脆饼干',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-9.png'),
					title: '青菜',
					price: 19,
					unit: '500g',
					link: ''
				},
				{
					pic: require('../../static/images/shop-10.png'),
					title: '玉米',
					price: 19,
					unit: '500g',
					link: ''
				}
			],
			// 金融服务
			financialArr: [
				{
					pic: 'myicon-financialOne',
					title: '丰收惠',
					tips: '告别种植风险',
					yield: '6.00%',
					note: '业绩比较基准',
					link: ''
				},
				{
					pic: 'myicon-financialTwo',
					title: '惠农贷',
					tips: '告别种植风险',
					yield: '6.00%',
					note: '业绩比较基准',
					link: ''
				},
				{
					pic: 'myicon-financialThree',
					title: '丰收惠',
					tips: '告别种植风险',
					yield: '6.00%',
					note: '业绩比较基准',
					link: ''
				}
			],
			// 乡村文旅
			brigadeArr: [
				{
					title: '市农业农村局召开迎接农村集体产权制度改革验收部署会议',
					pic: require('../../static/images/brigade-1.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '海口市农业农村局召开2020年度总结表彰大会',
					pic: require('../../static/images/brigade-2.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '市农技中心调查槟榔异常情况并开展技术指导 ',
					pic: require('../../static/images/brigade-3.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '深圳六旬老汉不配合检疫检查还咬伤警察，获刑9个月',
					pic: require('../../static/images/brigade-4.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '上海首例高空抛物入刑案：头顶的安全离不开守法与善行',
					pic: require('../../static/images/brigade-5.png'),
					date: '2021-08-11',
					link: ''
				}
			],
			// 掌上村务
			handheldArr: [
				{
					title: '市农业农村局召开迎接农村集体产权制度改革验收部署会议',
					pic: require('../../static/images/village-1.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '海口市农业农村局召开2020年度总结表彰大会',
					pic: require('../../static/images/village-2.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '市农技中心调查槟榔异常情况并开展技术指导 ',
					pic: require('../../static/images/village-3.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '深圳六旬老汉不配合检疫检查还咬伤警察，获刑9个月',
					pic: require('../../static/images/village-4.png'),
					date: '2021-08-11',
					link: ''
				},
				{
					title: '上海首例高空抛物入刑案：头顶的安全离不开守法与善行',
					pic: require('../../static/images/village-5.png'),
					date: '2021-08-11',
					link: ''
				}
			]
		};
	},
	computed: mapState(['locationInfo', 'nowDate', 'todayWeather','statusBar']),
	onLoad() {
		this.$nextTick(() => {
			// 获取搜索栏的高度
			uni.createSelectorQuery()
				.in(this)
				.select('.index_search')
				.boundingClientRect(data => {
					this.searchHeightEle = Math.ceil(data.height);
				})
				.exec();
		});
	},
	// 监听页面滚动，参数为Object
	onPageScroll(e) {
		// 监听滚动，通过判断高度来更改搜索框的背景色
		const cha = this.searchHeightEle - e.scrollTop;
		if (cha >= 0) {
			const percent = Math.floor(e.scrollTop / this.searchHeightEle * 10);
			this.searchBG = percent / 10;
		}else{
			this.searchBG = 1;
		}
	},
	methods: {}
};
</script>

<style></style>
