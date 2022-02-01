<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			year: {
				type: String,
				required: true
			},
			posterURL: {
				type: String,
				required: true
			}
		}
	};
</script>

<template>
	<article class="flex h-full p-1">
		<section class="h-full">
			<img v-if="this.posterURL !== 'N/A'" :src="this.posterURL" :alt="this.title + ' poster'" class="h-full" />
		</section>
		<section class="pl-2 font-semibold">
			<h1 class="text-xl">{{ this.title }}</h1>
			<p class="text-sm opacity-75">{{ this.year }}</p>
		</section>
	</article>
</template>

<style scoped></style>
