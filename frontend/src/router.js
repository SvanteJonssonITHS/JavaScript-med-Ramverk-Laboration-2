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
		}
	]
});

export default router;
