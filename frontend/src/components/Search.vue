<script>
	import Suggestion from './Suggestion.vue';

	export default {
		components: { Suggestion },
		data() {
			return {
				query: '',
				queryChangesSinceFetch: 0,
				suggestions: []
			};
		},
		methods: {
			async fetchSuggestions(input) {
				const response = await this.axios.get(
					`/api/fetchSuggestions/${input}`
				);
				this.suggestions = response.data.Search;
				console.log(response.data.Search);
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
		},
		created() {
			this.fetchSuggestions('temp');
		}
	};
</script>

<template>
	<form class="">
		<input v-model="query" />
		<ul>
			<li v-for="suggestion in suggestions">
				<Suggestion
					:title="suggestion.Title"
					:year="suggestion.Year"
					:posterURL="suggestion.Poster"
					class="bg-green-200 h-32 w-full"
				/>
			</li>
		</ul>
	</form>
</template>

<style scoped></style>
