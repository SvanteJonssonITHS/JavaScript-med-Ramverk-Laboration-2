// External dependencies
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { registerSW } from 'virtual:pwa-register';

// Local dependencies
import App from './App.vue';
import router from './router';
import store from './store';
import './style.scss';

// Service Worker registration
registerSW();

// App initialization
const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount('#app');
