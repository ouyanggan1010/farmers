import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import store from '@/store/index.js'
// 格式化时间
import dayjs from 'dayjs'
// 序列化对象
import qs from 'qs'

// H5调用地图API
import {
	VueJsonp
} from 'vue-jsonp'
Vue.use(VueJsonp)

// 将所有的异步函数转成promise对象
import {
	http
} from '@/static/units/http.js'
Vue.prototype.$http = http;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
