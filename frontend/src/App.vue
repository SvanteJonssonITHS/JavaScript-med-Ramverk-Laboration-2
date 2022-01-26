<script>
	import Navbar from './components/Navbar.vue';
	export default {
		name: 'App',
		components: { Navbar },
		methods: {}
	};
</script>

<template>
	<Navbar />
	<router-view></router-view>
</template>

<style lang="scss"></style>
