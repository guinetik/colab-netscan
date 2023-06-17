import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'dist',
			assets: 'dist',
			domain: 'colab-netscan.guinetik.com',
			jekyll: false,
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		},
		appDir: 'app'
	}
};
export default config;