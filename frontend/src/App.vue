<script>
	import HelloWorld from './components/HelloWorld.vue';
	export default {
		name: 'App',
		components: { HelloWorld },
		methods: {
			async getCityAmount() {
				const response = await this.axios.get('/api/');
				const result = response.data;
				console.log(result);
			}
		},
		created() {
			this.getCityAmount();
		}
	};
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
