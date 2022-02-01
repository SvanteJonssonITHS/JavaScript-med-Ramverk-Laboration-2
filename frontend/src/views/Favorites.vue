<template>
	<main class="h-full">
		<section class="py-4 w-4/5 mx-auto">
			<h1 class="text-3xl font-bold">My favorites</h1>
		</section>
		<section class="w-4/5 mx-auto flex flex-wrap">
			<ResultsList v-if="favorites" class="w-full" noResultMessage="No favorites were found!">
				<li v-for="favorite in favorites">
					<router-link :to="`/title/${favorite.imdbID}`">
						<Result
							class="h-24 w-full border-b-2 border-slate-300"
							:title="favorite.Title"
							:year="favorite.Year"
							:posterURL="favorite.Poster"
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
		name: 'Favorites',
		components: { ResultsList, Result },
		data() {
			return {
				favorites: null
			};
		},
		created() {
			this.favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : null;
		}
	};
</script>
