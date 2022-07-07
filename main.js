import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import store from '@/store/index.js'

// H5调用地图API
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif