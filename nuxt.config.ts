import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: ['@kevinmarrec/nuxt-pwa'],
	pwa: {
		icon: {
			maskablePadding: 0,
		},
		manifest: {
			name: 'Nuxt App',
			short_name: 'Nuxt App',
			theme_color: '#00DC82',
		},
	},
	srcDir: 'src',
})
