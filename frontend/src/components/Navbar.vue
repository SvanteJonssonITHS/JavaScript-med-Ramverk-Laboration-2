<script>
	export default {
		props: {
			siteName: {
				type: String,
				required: true,
				default: 'Site name'
			}
		}
	};
</script>

<template>
	<nav
		class="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-lg"
	>
		<router-link to="/" class="text-lg font-bold text-white">{{ this.siteName }}</router-link>
		<router-link
			to=""
			class="inline-flex items-center px-3 py-2 font-semibold rounded px-4 py-2 leading-5 bg-emerald-500 text-primary-100 text-white hover:bg-emerald-700"
		>
			<span class="material-icons inline-block w-5 h-5 mr-2"> favorite_border </span>
			My favorites
		</router-link>
	</nav>
</template>

<style scoped></style>
