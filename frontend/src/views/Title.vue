<template>
	<main class="h-full">{{ title }}</main>
</template>

<script>
	export default {
		name: 'Title',
		data() {
			return {
				title: {}
			};
		},
		methods: {
			async getTitle(input) {
				const response = await this.axios.get(`/api/getTitle/${input}`);
				this.title = response.data;
			}
		},
		created() {
			this.getTitle(this.$route.params.imdbID);
		}
	};
</script>
