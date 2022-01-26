// Dependencies
import { createStore } from 'vuex';

//Store configuration
const mutations = {
	changeResult(state, newResult) {
		state.result = newResult;
	}
};

const state = {
	result: {}
};

const store = createStore({ mutations, state, strict: true });

export default store;
