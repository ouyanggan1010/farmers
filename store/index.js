import Vue from 'vue'
import Vuex from 'vuex'
// 实现跨域请求
import {
	jsonp
} from 'vue-jsonp';
// 封装的promise对象
import {
	http
} from '@/static/units/http.js'
// 格式化时间
import dayjs from 'dayjs'
// 序列化对象
import qs from 'qs'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// 是否登录
		hasLogin: false,
		// 用户信息
		userInfo: {},
		// 网络状态
		networkState: false,
		// 位置信息
		locationInfo: {
			latitude: null,
			longitude: null,
			city: "",
			address: "",
		},
		// 腾讯地图请求位置API接口
		qqGeocoder: 'https://apis.map.qq.com/ws/geocoder/v1',
		qqKey: 'MJIBZ-O5EKD-TJK4T-PLOS4-Q5JIF-5KFGO',
		// 星期数组
		weekArr: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		// 当前时间
		nowDate: {
			date: "",
			week: "",
		},
		// 今天的天气
		todayWeather: {},
		// 七天的天气
		weekWheather: [],
		// 状态栏的高度
		statusBar: 0,
		// 状态栏高度 + 导航栏高度
		customBar: 0
	},
	// 异步，对于一些初始请求可以放这里，比如登录
	actions: {
		// 获取定位信息
		async getLocation(context) {
			try {
				const res = await http(uni.getLocation, {
					type: 'gcj02',
					highAccuracyExpireTime: 3000,
					isHighAccuracy: true,
					geocode: true,
				});
				const {
					latitude,
					longitude
				} = res;
				const url = context.state.qqGeocoder;
				const key = context.state.qqKey;
				// #ifdef H5
				//通过经纬度换取地址
				const mapMesg = await jsonp(url, {
					key: key,
					location: `${latitude},${longitude}`,
					output: 'jsonp',
				});
				const {
					address,
					address_component
				} = mapMesg.result;
				// #endif
				// #ifndef H5
				const orther = await http(uni.request, {
					url: url,
					data: {
						location: `${latitude},${longitude}`,
						key: `${key}`
					}
				});
				const {
					address,
					address_component
				} = orther.data.result;
				// #endif
				context.commit('updateAddress', {
					latitude,
					longitude,
					city: address_component.city,
					address
				})
			} catch (e) {
				//TODO handle the exception
			}
		},
		// 获取天气
		async getWeather(context) {
			try {
				///通过经纬度换取地址
				const city = context.state.locationInfo.city;
				const weatherMesg = await http(uni.request, {
					url: 'https://yiketianqi.com/api',
					data: {
						unescape: 1,
						version: 'v1',
						appid: 57587959,
						appsecret: 'z7u3Bomm',
						city: city.replace('市', ''),
					}
				});
				console.log("获取天气=========", weatherMesg)
				context.commit('updateWeather', weatherMesg.data)
			} catch (e) {
				//TODO handle the exception
			}
		},
		// 获取状态栏与导航栏的高度
		async getBarHeight(context) {
			try {
				const e = await http(uni.getSystemInfo);
				let statusBar = 0
				let customBar = 0

				// #ifdef MP
				statusBar = e.statusBarHeight
				customBar = e.statusBarHeight + 45
				if (e.platform === 'android') {
					customBar = e.statusBarHeight + 50
				}
				// #endif


				// #ifdef MP-WEIXIN
				statusBar = e.statusBarHeight
				// @ts-ignore
				const custom = wx.getMenuButtonBoundingClientRect()
				customBar = custom.bottom + custom.top - e.statusBarHeight
				console.log("info==============MP-WEIXIN",statusBar)
				// #endif


				// #ifdef MP-ALIPAY
				statusBar = e.statusBarHeight
				customBar = e.statusBarHeight + e.titleBarHeight
				// #endif


				// #ifdef APP-PLUS
				console.log('app-plus', e)
				statusBar = e.statusBarHeight
				customBar = e.statusBarHeight + 45
				console.log("info==============APP-PLUS",statusBar)
				// #endif


				// #ifdef H5
				statusBar = 0
				customBar = e.statusBarHeight + 45
				console.log("info==============H5",statusBar)
				// #endif
                
				// 更新
				context.commit('setStatusBar', statusBar)
				context.commit('setCustomBar', customBar)
			} catch (e) {
				//TODO handle the exception
			}
		}
	},
	// 一些公用的方法，可以及时更新state数据
	mutations: {
		// 获取时间
		getDateTime(state) {
			state.nowDate.date = dayjs().format('YYYY.MM.DD');
			state.nowDate.week = state.weekArr[dayjs().get('day')];
		},
		// 更新当前定位的地址
		updateAddress(state, {
			latitude,
			longitude,
			city,
			address
		}) {
			state.locationInfo.latitude = latitude;
			state.locationInfo.longitude = longitude;
			state.locationInfo.city = city;
			state.locationInfo.address = address;
		},
		// 更新当前的天气情况
		updateWeather(state, weatherMesg) {
			state.weekWheather = weatherMesg.data;
			const now = dayjs().format('YYYY-MM-DD');
			const nowWeather = weatherMesg.data.filter((item) => {
				return now == item.date
			});
			state.todayWeather = nowWeather[0];
		},
		// 设置状态栏高度
		setStatusBar(state,height) {
			state.statusBar = height
		},
		// 状态栏高度 + 导航栏高度
		setCustomBar(state,height) {
			state.customBar = height
		}
	},
	getters: {},
	modules: {}
})
