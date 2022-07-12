<script>
export default {
	onLaunch: async function() {
		console.log('App Launch');
		// 隐藏tabBar
		uni.hideTabBar();
		// 调用获取当前时间
		this.$store.commit('getDateTime');
		// 调用定位
		await this.$store.dispatch('getLocation');
		// 调用获取天气的接口
		// await this.$store.dispatch('getWeather');
		// 获取系统参数
		await this.$store.dispatch('getBarHeight');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/common/scss/variable.scss';
</style>
