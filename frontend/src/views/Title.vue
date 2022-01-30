<template>
	<main class="h-full">
		<TitleHeader
			v-if="title"
			:name="title.Title"
			:type="title.Type"
			:year="title.Year"
			:rated="title.Rated"
			:runtime="title.Runtime"
			class="w-4/5 mx-auto"
		>
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
	export default {
		name: 'Title',
		components: {
			TitleHeader,
			TitleBody
		},
		data() {
			return {
				title: null,
				metadata: []
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
			}
		}
	};
</script>
