import Vue from 'vue'
import Vuex from 'vuex'
import {
	jsonp
} from 'vue-jsonp';

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
			address: ""
		}
	},
	// 异步，对于一些初始请求可以放这里，比如登录
	actions: {},
	// 一些公用的方法，可以及时更新state数据
	mutations: {
		// 获取定位信息
		getLocation(state) {
			uni.getLocation({
				type: 'gcj02',
				highAccuracyExpireTime: 3000,
				isHighAccuracy: true,
				geocode: true,
				success: async (res) => {
					try {
						const {
							latitude,
							longitude
						} = res;
						state.locationInfo.latitude = latitude;
						state.locationInfo.longitude = longitude;
						const url = 'https://apis.map.qq.com/ws/geocoder/v1';
						const key='MJIBZ-O5EKD-TJK4T-PLOS4-Q5JIF-5KFGO';
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
						state.locationInfo.city = address_component.city;
						state.locationInfo.address = address;
						// #endif
						// #ifndef H5
						const urlStr = `${url}/?location=${latitude},${longitude}&key=${key}`;
						uni.request({
							header: {
								"Content-Type": "application/text"
							},
							url: urlStr,
							success(orther) {
								const {
									address,
									address_component
								} = orther.data.result;
								state.locationInfo.city = address_component.city;
								state.locationInfo.address = address;
							}
						});
						// #endif
						console.log("请求到位置信息", state.locationInfo)
					} catch (e) {
						//TODO handle the exception
					}
				}
			});
		}
	},
	getters: {},
	modules: {}
})
