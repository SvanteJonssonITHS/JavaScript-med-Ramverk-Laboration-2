<script>
	import Search from './Search.vue';

	export default {
		components: { Search },
		data() {
			return {
				greeting: 'Hello World!'
			};
		}
	};
</script>

<template>
	<nav class="bg-black p-3">
		<Search />
		<router-link
			to=""
			class="inline-flex items-center px-3 py-2 font-medium rounded px-4 py-2 leading-5 bg-green-500 text-primary-100 text-white hover:text-white hover:bg-green-700"
		>
			<span class="material-icons inline-block w-5 h-5 mr-2">
				favorite_border
			</span>
			My favorites
		</router-link>
	</nav>
</template>

<style scoped></style>
