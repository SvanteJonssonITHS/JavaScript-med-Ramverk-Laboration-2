<template>
	<main class="h-full">
		<section class="py-4 w-4/5 mx-auto">
			<h1 class="text-3xl font-bold">My favorites</h1>
		</section>
		<section class="w-4/5 mx-auto flex flex-wrap">
			<SortSearch @change-sort="changeSort" @search="newSearch" class="px-3" :show-best="false" />

			<ResultsList v-if="favorites" class="w-full" no-result-message="No favorites were found!">
				<li v-for="favorite in favorites" :key="favorite.imdbID">
					<router-link :to="`/title/${favorite.imdbID}`">
						<Result
							class="h-24 w-full border-b-2 border-slate-300"
							:title="favorite.Title"
							:year="favorite.Year"
							:poster-u-r-l="favorite.Poster"
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
		name: 'Favorites',
		components: { SortSearch, ResultsList, Result },
		data() {
			return {
				favorites: null
			};
		},
		methods: {
			changeSort(typeOfSort, reverseSort) {
				if (!this.shownResults) return;
				let order = [...this.shownResults];
				switch (typeOfSort) {
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
						order.sort((a, b) => a.Title.localeCompare(b.Title));
						break;
				}
				this.shownResults = reverseSort ? order.reverse() : order;
			}
		},
		created() {
			this.favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : null;
		}
	};
</script>
