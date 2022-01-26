<script>
	export default {
		data() {
			return {
				query: '',
				queryChangesSinceFetch: 0
			};
		},
		methods: {
			async fetchSuggestions(input) {
				const response = await this.axios.get(
					`/api/fetchSuggestions/${input}`
				);
				const result = response.data;
				console.log(result);
			}
		},
		watch: {
			query(input) {
				this.queryChangesSinceFetch++;
				if (input.length <= 0) {
					this.queryChangesSinceFetch = 0;
				} else if (this.queryChangesSinceFetch >= 3) {
					this.fetchSuggestions(input);
					this.queryChangesSinceFetch = 0;
				}
			}
		}
	};
</script>

<template>
	<form class="">
		<input v-model="query" />
	</form>
</template>

<style scoped></style>
