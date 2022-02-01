// Dependencies
import { createStore } from 'vuex';

//Store configuration
const mutations = {
	changeTypeOfSort(state, newResult) {
		state.typeOfSort = newResult;
	},
	changeSortDirection(state) {
		state.reverseSort = !state.reverseSort;
	}
};

const state = {
	typeOfSort: 'best',
	reverseSort: false
};

const store = createStore({ mutations, state, strict: true });

export default store;
