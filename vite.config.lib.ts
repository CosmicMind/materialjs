import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	LibraryFormats,
	UserConfigExport,
	defineConfig,
} from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const external = [
	'vue',
	'vee-validate',
	'@cosmicmind/foundation'
]
const globals = {}
const srcDir = './src'
const emptyOutDir = false
const formats: LibraryFormats[] = [ 'es' ]

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
		plugins: [
			vue(),
			dts()
		],
		build: {
			emptyOutDir,
			lib: {
				name: process.env.npm_package_name,
				entry: `${srcDir}/index.ts`,
				formats,
				fileName: 'lib.es',
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
			minify,
		},
	}

	return config
})