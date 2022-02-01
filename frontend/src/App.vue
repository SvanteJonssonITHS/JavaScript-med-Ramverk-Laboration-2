<script>
	import Navbar from './components/Navbar.vue';
	export default {
		name: 'App',
		components: { Navbar }
	};
</script>

<template>
	<Navbar site-name="MovieDB" />
	<router-view id="main" class="bg-slate-200"></router-view>
</template>

<style lang="scss">
	#main {
		min-height: calc(100vh - 68px);
	}
</style>
