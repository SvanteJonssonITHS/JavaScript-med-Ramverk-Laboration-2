<template>
	<main class="h-full relative">
		<FavoriteNotice
			v-if="showFavoriteNotice"
			:name="title.Title"
			:favorite="isFavorite"
			class="absolute top-0 right-0"
			:class="{ noticeFade: showFavoriteNotice }"
		/>
		<TitleHeader
			v-if="title"
			:name="title.Title"
			:type="title.Type"
			:year="title.Year"
			:rated="title.Rated"
			:runtime="title.Runtime"
			class="w-4/5 mx-auto"
		>
			<button @click="handleFavorite()" title="Add/Remove from favorites">
				<span class="material-icons text-emerald-500 text-5xl p-4 rounded-full hover:bg-slate-100">
					{{ favoriteSymbol }}
				</span>
			</button>
		</TitleHeader>
		<TitleBody
			v-if="title"
			:posterURL="title.Poster"
			:genres="title.Genre"
			:plot="title.Plot"
			:metadata="metadata"
			class="w-4/5 mx-auto"
		/>
	</main>
</template>

<script>
	import TitleHeader from '../components/TitleHeader.vue';
	import TitleBody from '../components/TitleBody.vue';
	import FavoriteNotice from '../components/FavoriteNotice.vue';
	export default {
		name: 'Title',
		components: {
			TitleHeader,
			TitleBody,
			FavoriteNotice
		},
		data() {
			return {
				title: null,
				metadata: [],
				isFavorite: false,
				showFavoriteNotice: false
			};
		},
		methods: {
			async getTitle(input) {
				const response = await this.axios.get(`/api/getTitle/${input}`);
				this.title = response.data;
			},
			prepareGenres() {
				this.title.Genre = this.title.Genre.split(', ');
			},
			prepareMetadata() {
				if (this.title.Director && this.title.Director != 'N/A') {
					this.metadata.push({
						head: 'Director',
						body: this.title.Director
					});
				}
				if (this.title.Writer && this.title.Writer != 'N/A') {
					this.metadata.push({
						head: 'Writer',
						body: this.title.Writer
					});
				}
				if (this.title.Actors && this.title.Actors != 'N/A') {
					this.metadata.push({
						head: 'Actors',
						body: this.title.Actors
					});
				}
				if (this.title.Country && this.title.Country != 'N/A') {
					this.metadata.push({
						head: 'Country',
						body: this.title.Country
					});
				}
				if (this.title.Language && this.title.Language != 'N/A') {
					this.metadata.push({
						head: 'Language',
						body: this.title.Language
					});
				}
				if (this.title.Awards && this.title.Awards != 'N/A') {
					this.metadata.push({
						head: 'Awards',
						body: this.title.Awards
					});
				}
				if (this.title.totalSeasons && this.title.totalSeasons != 'N/A') {
					this.metadata.push({
						head: 'Total Seasons',
						body: this.title.totalSeasons
					});
				}
				if (this.title.Released && this.title.Released != 'N/A') {
					this.metadata.push({
						head: 'Released',
						body: this.title.Released
					});
				}
				if (this.title.DVD && this.title.DVD != 'N/A') {
					this.metadata.push({
						head: 'DVD',
						body: this.title.DVD
					});
				}
				if (this.title.BoxOffice && this.title.BoxOffice != 'N/A') {
					this.metadata.push({
						head: 'BoxOffice',
						body: this.title.BoxOffice
					});
				}
			},
			checkFavorites() {
				if (localStorage.getItem('favorites')) {
					const favorites = JSON.parse(localStorage.getItem('favorites'));
					favorites.filter((o) => {
						if (o.imdbID == this.title.imdbID) {
							this.isFavorite = true;
							return;
						}
					});
				}
			},
			handleFavorite() {
				let favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
				switch (this.isFavorite) {
					case true:
						this.isFavorite = false;
						favorites = favorites.filter((o) => o.imdbID != this.title.imdbID);
						localStorage.setItem('favorites', JSON.stringify(favorites));
						break;
					case false:
						this.isFavorite = true;
						favorites.push(this.title);
						localStorage.setItem('favorites', JSON.stringify(favorites));
						break;
				}
				this.displayFavoriteNotice();
			},
			displayFavoriteNotice() {
				this.showFavoriteNotice = true;
				setTimeout(() => (this.showFavoriteNotice = false), 2500);
			}
		},
		created() {
			this.getTitle(this.$route.params.imdbID);
		},
		watch: {
			title() {
				if (!this.title) return;
				if (!this.title.Genre.isArray) this.prepareGenres();
				this.prepareMetadata();
				this.checkFavorites();
			}
		},
		computed: {
			favoriteSymbol() {
				return this.isFavorite ? 'favorite' : 'favorite_border';
			}
		}
	};
</script>

<style scoped>
	.noticeFade {
		opacity: 0;
		animation: fade 2500ms linear;
	}

	@keyframes fade {
		0%,
		100% {
			opacity: 0;
		}
		35% {
			opacity: 1;
		}
		65% {
			opacity: 1;
		}
	}
</style>
