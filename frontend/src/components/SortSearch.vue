<script>
	export default {
		data() {
			return {
				typeOfSort: this.$store.state.typeOfSort || 'best',
				reverseSort: this.$store.state.reverseSort || false,
				query: this.$route.params.query
			};
		},
		emits: ['changeSort', 'search'],
		methods: {
			handleSort(event) {
				if (event.currentTarget != document.querySelector('.activeSort')) {
					// Update of variables
					this.typeOfSort = event.currentTarget.id;
					this.reverseSort = false;
				} else {
					this.reverseSort = !this.reverseSort;
				}
				this.$store.commit('changeTypeOfSort', this.typeOfSort);
				this.$store.commit('changeSortDirection', this.reverseSort);
				this.$emit('changeSort', this.typeOfSort, this.reverseSort);
			},
			handleSearch() {
				this.$emit('search', this.query);
			}
		}
	};
</script>

<template>
	<section>
		<input type="text" v-model="query" @keyup.enter="handleSearch" class="rounded p-2" />
		<button @click="handleSort($event)" id="best" class="flex p-2" :class="{ activeSort: typeOfSort == 'best' }">
			<p>Best match</p>
			<span class="material-icons" v-if="reverseSort && typeOfSort == 'best'">arrow_drop_up</span>
			<span class="material-icons" v-else>arrow_drop_down</span>
		</button>
		<button @click="handleSort($event)" id="abc" class="flex p-2" :class="{ activeSort: typeOfSort == 'abc' }">
			<p>Alphabetically</p>
			<span class="material-icons" v-if="reverseSort && typeOfSort == 'abc'">arrow_drop_up</span>
			<span class="material-icons" v-else>arrow_drop_down</span>
		</button>
		<button @click="handleSort($event)" id="year" class="flex p-2" :class="{ activeSort: typeOfSort == 'year' }">
			<p>Year</p>
			<span class="material-icons" v-if="reverseSort && typeOfSort == 'year'">arrow_drop_up</span>
			<span class="material-icons" v-else>arrow_drop_down</span>
		</button>
		<button @click="handleSort($event)" id="type" class="flex p-2" :class="{ activeSort: typeOfSort == 'type' }">
			<p>Type</p>
			<span class="material-icons" v-if="reverseSort && typeOfSort == 'type'">arrow_drop_up</span>
			<span class="material-icons" v-else>arrow_drop_down</span>
		</button>
	</section>
</template>

<style scoped lang="scss">
	// Sass variables
	$active-color: #3b82f6;
	$border-radius: 0.3rem;
	.activeSort {
		color: $active-color;
	}

	.rounded {
		// Tailwind class
		border-radius: $border-radius;
	}
</style>
