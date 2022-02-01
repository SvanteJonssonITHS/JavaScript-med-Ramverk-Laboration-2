<template>
	<main class="h-full">
		<section class="py-4 w-4/5 mx-auto">
			<h1 class="text-3xl"><span class="font-bold">Search results for:</span> {{ query }}</h1>
		</section>
		<section class="w-4/5 mx-auto flex flex-wrap">
			<SortSearch @changeSort="changeSort" @search="updatePage" class="" />
			<ResultsList class="">
				<li v-for="result in shownResults">
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
	import SortSearch from '../components/SortSearch.vue';
	import ResultsList from '../components/ResultsList.vue';
	import Result from '../components/Result.vue';
	export default {
		name: 'Results',
		components: { SortSearch, ResultsList, Result },
		data() {
			return {
				query: this.$route.params.query || '',
				originalResults: {},
				shownResults: {}
			};
		},
		methods: {
			async getResults(input) {
				const response = await this.axios.get(`/api/getResults/${input}`);
				this.originalResults = response.data.Search;
				this.shownResults = [...this.originalResults];
			},
			changeSort(typeOfSort, reverseSort) {
				let order = [...this.shownResults];
				switch (typeOfSort) {
					case 'best':
						order = [...this.originalResults];
						break;
					case 'abc':
						order.sort((a, b) => a.Title.localeCompare(b.Title));
						break;
					case 'year':
						order.sort((a, b) => a.Year.substring(1, 4).localeCompare(b.Year.substring(1, 4)));
						break;
					case 'type':
						order.sort((a, b) => a.Type.localeCompare(b.Type));
						break;
					default:
						order = [...this.originalResults];
						break;
				}
				this.shownResults = reverseSort ? order.reverse() : order;
			},
			updatePage(input) {
				this.$router.push(`/results/${input}`);
				this.query = input;
				this.getResults(input);
			}
		},
		async created() {
			await this.getResults(this.query);
			this.changeSort(this.$store.state.typeOfSort, this.$store.state.reverseSort);
		},
		watch: {
			originalResults() {
				this.changeSort(this.$store.state.typeOfSort, this.$store.state.reverseSort);
			}
		}
	};
</script>
