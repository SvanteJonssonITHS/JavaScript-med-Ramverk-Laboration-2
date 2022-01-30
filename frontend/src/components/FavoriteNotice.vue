<script>
	export default {
		props: {
			favorite: {
				type: Boolean,
				required: true
			},
			name: {
				type: String,
				required: true
			}
		},
		computed: {
			message() {
				if (this.favorite) {
					return `was added to your list of favorites`;
				} else {
					return `was removed from your list of favorites`;
				}
			}
		}
	};
</script>

<template>
	<section class="p-2 max-w-fit">
		<h2 class="p-2 font-bold text-white bg-red-500" :class="{ added: favorite }">Notice!</h2>
		<p class="p-2 bg-white">
			<span class="font-semibold">{{ this.name }}</span> {{ message }}
		</p>
	</section>
</template>

<style scoped>
	.added {
		@apply bg-green-500;
	}
</style>
