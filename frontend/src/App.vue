<script>
	import Navbar from './components/Navbar.vue';
	export default {
		name: 'App',
		components: { Navbar },
		methods: {}
	};
</script>

<template>
	<Navbar siteName="MovieDB" />
	<router-view id="main" class="bg-slate-200"></router-view>
</template>

<style lang="scss">
	#main {
		min-height: calc(100vh - 68px);
	}
</style>
