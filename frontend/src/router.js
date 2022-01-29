// Dependencies
import { createRouter, createWebHistory } from 'vue-router';

// Router configuration
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'Home',
			component: () => import('./views/Home.vue'),
			path: '/'
		},
		{
			name: 'Results',
			component: () => import('./views/Results.vue'),
			path: '/results/:query'
		},
		{
			name: 'Title',
			component: () => import('./views/Title.vue'),
			path: '/title/:imdbID'
		}
	]
});

export default router;
