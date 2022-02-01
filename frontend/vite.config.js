import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		VitePWA({
			manifest: {
				background_color: 'grey',
				display: 'standalone',
				icons: [
					{
						purpose: 'any',
						sizes: '192x192',
						src: 'manifest-icon-192.maskable.png',
						type: 'image/png'
					},
					{
						purpose: 'maskable',
						sizes: '192x192',
						src: 'manifest-icon-192.maskable.png',
						type: 'image/png'
					},
					{
						purpose: 'any',
						sizes: '512x512',
						src: 'manifest-icon-512.maskable.png',
						type: 'image/png'
					},
					{
						purpose: 'maskable',
						sizes: '512x512',
						src: 'manifest-icon-512.maskable.png',
						type: 'image/png'
					}
				],
				name: 'MovieDB',
				short_name: 'MDB',
				start_url: '/',
				theme_color: 'blue'
			},
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
				runtimeCaching: [
					{
						handler: 'NetworkFirst',
						urlPattern: /http:\/\/localhost\:3000\/api\/getTitle\/.+/
					},
					{
						handler: 'NetworkFirst',
						urlPattern: /http:\/\/localhost:3000\/api\/getResults\/.+/
					},
					{
						handler: 'NetworkFirst',
						urlPattern: 'https://fonts.googleapis.com/icon?family=Material+Icons'
					},
					{
						handler: 'NetworkFirst',
						urlPattern: 'https://fonts.gstatic.com/s/materialicons/v121/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'
					}
				]
			}
		}),
		vue()
	]
});
