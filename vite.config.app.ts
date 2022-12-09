import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	UserConfigExport,
	defineConfig,
} from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const srcDir = './src'
const emptyOutDir = false

export default defineConfig(({
	mode,
}) => {
	const minify = 'production' === mode
	const config: UserConfigExport = {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL(srcDir, import.meta.url)),
			},
		},
		build: {
			outDir: 'dist/public',
			emptyOutDir,
			minify,
		},
		server: {
			strictPort: true,
			port: 80,
			host: '0.0.0.0',
		},
		preview: {
			strictPort: true,
			port: 80,
			host: '0.0.0.0',
		},
		plugins: [
			vue(),
			vueJsx()
		],
	}

	return config
})