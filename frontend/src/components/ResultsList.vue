<script>
	export default {
		props: {
			noResultMessage: {
				type: String,
				required: false,
				default: 'No results were found for:'
			}
		}
	};
</script>

<template>
	<ul>
		<slot>
			{{ noResultMessage }}
			<span class="italic">{{ $route.params.query }}</span>
		</slot>
	</ul>
</template>

<style scoped></style>
