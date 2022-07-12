<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// 隐藏tabBar
		uni.hideTabBar();
	},
	onShow: function() {
		console.log('App Show');
		// 调用定位
		this.$store.commit('getLocation');
		// 调用获取当前时间
		this.$store.commit('getLocation');
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
