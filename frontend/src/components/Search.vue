<script>
	import Suggestion from './Result.vue';

	export default {
		components: { Suggestion },
		data() {
			return {
				query: '',
				queryChangesSinceFetch: 0,
				suggestions: [],
				showSuggestions: false
			};
		},
		methods: {
			async fetchSuggestions(input) {
				const response = await this.axios.get(
					`/api/fetchSuggestions/${input}`
				);
				this.suggestions = response.data.Search;
				console.log(response.data.Search);
			},
			async fetchResult(input) {
				const response = await this.axios.get(
					`/api/fetchResult/${input}`
				);
				this.$store.commit('changeResult', response.data);
				this.$router.push(`/Result/${input}`);
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
	<form class="" @submit.prevent="fetchResult(query)">
		<input
			v-model="query"
			@focus="showSuggestions = true"
			@blur="showSuggestions = false"
		/>
		<ul v-if="showSuggestions">
			<li v-for="suggestion in suggestions">
				<Suggestion
					class="bg-green-200 h-32 w-full"
					:title="suggestion.Title"
					:year="suggestion.Year"
					:posterURL="suggestion.Poster"
					@click="query = suggestion.Title"
				/>
			</li>
		</ul>
	</form>
</template>

<style scoped></style>
