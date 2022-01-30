<script>
	export default {
		props: {
			name: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: true
			},
			year: {
				type: String,
				required: true
			},
			rated: {
				type: String,
				required: true
			},
			runtime: {
				type: String,
				required: true
			}
		},
		computed: {
			titleMetadata() {
				return `${this.type[0].toUpperCase() + this.type.slice(1)} • ${
					this.year
				} • ${this.rated} • ${this.runtime}`;
			}
		}
	};
</script>

<template>
	<article class="flex justify-between py-4">
		<section class="flex flex-col justify-center">
			<h1 class="text-5xl font-semibold mb-2">{{ name }}</h1>
			<p>{{ titleMetadata }}</p>
		</section>
		<section class="bg-amber-300 flex items-center">
			<slot></slot>
		</section>
	</article>
</template>

<style scoped></style>
