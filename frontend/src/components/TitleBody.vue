<script>
	export default {
		props: {
			posterURL: {
				type: String,
				required: true
			},
			genres: {
				type: Array,
				required: false,
				default: function () {
					return [];
				}
			},
			plot: {
				type: String,
				required: false,
				default: 'No plot was found.'
			},
			metadata: {
				type: Array,
				required: false,
				default: function () {
					return [];
				}
			}
		}
	};
</script>

<template>
	<article class="flex flex-wrap py-4">
		<section class="max-w-xs">
			<img v-if="this.posterURL !== 'N/A'" :src="posterURL" alt="Poster" />
		</section>
		<section class="grow m-4 max-w-4xl">
			<ul class="flex">
				<li v-for="genre in genres" :key="genre" class="grid place-items-middle">
					<p class="px-3 py-1 rounded-full bg-emerald-500 font-semibold text-white mr-2 hover:bg-emerald-700">
						{{ genre }}
					</p>
				</li>
			</ul>
			<p class="my-4">{{ plot }}</p>
		</section>
		<section class="flex flex-col justify-center min-w-full">
			<ul>
				<li
					v-for="data in metadata"
					:key="data.head"
					class="w-full max-w-2xl p-2 border-b-2 border-slate-300 flex hover:bg-slate-100"
				>
					<h2 class="font-semibold mr-4">{{ data.head }}</h2>
					<p>{{ data.body }}</p>
				</li>
			</ul>
		</section>
	</article>
</template>

<style scoped></style>
