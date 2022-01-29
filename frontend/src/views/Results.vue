<template>
	<main class="h-full">
		<section class="py-4 w-4/5 mx-auto">
			<h1 class="text-3xl">
				<span class="font-bold">Search results for:</span> {{ query }}
			</h1>
		</section>
		<section class="w-4/5 mx-auto">
			<ResultsList>
				<li v-for="result in results">
					<router-link :to="`/title/${result.imdbID}`">
						<Result
							class="h-24 w-full border-b-2 border-slate-300"
							:title="result.Title"
							:year="result.Year"
							:posterURL="result.Poster"
						/>
					</router-link>
				</li>
			</ResultsList>
		</section>
	</main>
</template>

<script>
	import ResultsList from '../components/ResultsList.vue';
	import Result from '../components/Result.vue';
	export default {
		name: 'Results',
		components: { ResultsList, Result },
		data() {
			return {
				query: '',
				results: {}
			};
		},
		methods: {
			async getResults(input) {
				const response = await this.axios.get(
					`/api/getResults/${input}`
				);
				this.results = response.data.Search;
			}
		},
		created() {
			this.query = this.$route.params.query;
			this.getResults(this.query);
		}
	};
</script>
