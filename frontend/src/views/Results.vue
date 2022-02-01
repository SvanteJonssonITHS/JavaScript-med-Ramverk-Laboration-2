<template>
	<main class="h-full">
		<section class="py-4 w-4/5 mx-auto">
			<h1 class="text-3xl"><span class="font-bold">Search results for:</span> {{ query }}</h1>
		</section>
		<section class="w-4/5 mx-auto flex flex-wrap">
			<SortSearch @change-sort="changeSort" @search="newSearch" class="px-3" />
			<ResultsList class="grow">
				<li v-for="result in shownResults" :key="result.imdbID">
					<router-link :to="`/title/${result.imdbID}`">
						<Result
							class="h-24 w-full border-b-2 border-slate-300 hover:bg-slate-100"
							:title="result.Title"
							:year="result.Year"
							:poster-u-r-l="result.Poster"
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
				originalResults: null,
				shownResults: null
			};
		},
		methods: {
			async getResults(input) {
				const response = await this.axios.get(`/api/getResults/${input}`);
				if (response.data.Search) {
					this.originalResults = response.data.Search;
					this.shownResults = [...this.originalResults];
				}
			},
			changeSort(typeOfSort, reverseSort) {
				if (!this.shownResults) return;
				let order = [...this.shownResults];
				switch (typeOfSort) {
					case 'best':
						order = [...this.originalResults];
						break;
					case 'abc':
						order.sort((a, b) => a.Title.localeCompare(b.Title));
						break;
					case 'year':
						order.sort((a, b) => parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4)));
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
			newSearch(input) {
				this.originalResults = this.shownResults = null;
				this.$router.push(`/results/${input}`);
				this.query = input;
				this.getResults(input);
			}
		},
		created() {
			this.getResults(this.query);
			this.changeSort(this.$store.state.typeOfSort, this.$store.state.reverseSort);
		},
		watch: {
			originalResults() {
				this.changeSort(this.$store.state.typeOfSort, this.$store.state.reverseSort);
			}
		}
	};
</script>
