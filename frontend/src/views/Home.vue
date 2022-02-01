<template>
	<main class="h-full grid place-items-center">
		<form @submit.prevent="search(query)" class="w-4/5 sm:w-2/6">
			<input
				v-model="query"
				placeholder="Search for movies, TV-series and more..."
				class="w-full p-3 rounded-full font-semibold drop-shadow-md focus:outline-none"
			/>
		</form>
	</main>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				query: ''
			};
		},
		methods: {
			search(input) {
				this.$router.push(`/results/${input}`);
			}
		}
	};
</script>
