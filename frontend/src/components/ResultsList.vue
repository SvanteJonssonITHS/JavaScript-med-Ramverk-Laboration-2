<script>
	export default {};
</script>

<template>
	<ul>
		<slot>
			No results were found for:
			<span class="italic">{{ $route.params.query }}</span>
		</slot>
	</ul>
</template>

<style scoped></style>
