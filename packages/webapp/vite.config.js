import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/*
// extra vite plugin: load svg files (icons) as plain code, directly from ".svg" files
// reference: https://github.com/poppa/sveltekit-svg/blob/main/README.md#options
// install: pnpm add @sveltejs/adapter-node @poppanator/sveltekit-svg --save-dev

import svgImporter from '@poppanator/sveltekit-svg';

let svgImporterOptions = {
	type: 'src',
	svgoOptions: {
		multipass: true,
		plugins: [
			{
				name: 'preset-default',

				// remove all svgo plugins included in 'preset-default',
				// to make sure the svg is not modified in any;
				// reference: https://svgo.dev/docs/plugins/

				params: {
					overrides: {
						removeDoctype: false,
						removeXMLProcInst: false,
						removeComments: false,
						removeMetadata: false,
						removeEditorsNSData: false,
						cleanupAttrs: false,
						mergeStyles: false,
						inlineStyles: false,
						minifyStyles: false,
						cleanupIds: false,
						removeUselessDefs: false,
						cleanupNumericValues: false,
						convertColors: false,
						removeUnknownsAndDefaults: false,
						removeNonInheritableGroupAttrs: false,
						removeUselessStrokeAndFill: false,
						removeViewBox: false,
						cleanupEnableBackground: false,
						removeHiddenElems: false,
						removeEmptyText: false,
						convertShapeToPath: false,
						convertEllipseToCircle: false,
						moveElemsAttrsToGroup: false,
						moveGroupAttrsToElems: false,
						collapseGroups: false,
						convertPathData: false,
						convertTransform: false,
						removeEmptyAttrs: false,
						removeEmptyContainers: false,
						removeUnusedNS: false,
						mergePaths: false,
						sortAttrs: false,
						sortDefsChildren: false,
						removeTitle: false,
						removeDesc: false,
					}
				},
			},
			{
				name: 'convertStyleToAttrs',
				params: {
					keepImportant: true
				}
			},
			// remove fill and stroke; we want to control those from a parent element, using stroke-none, stroke-current, etc;
			// it's important to have this plugin after convertStyleToAttrs
			{
				name: 'removeAttrs',
				params: {
					attrs: [
						'*:fill',
						'*:stroke',
						'svg:width',
						'svg:height',
					],
				}
			},
		],
	},
}
*/

export default defineConfig({
	plugins: [
		sveltekit(),
		// svgImporter(svgImporterOptions)
	],
	server: {
		host: '0.0.0.0',
		port: process.env.VITE_PORT,
		strictPort: true,
		// base: '/xyz/'
	},
	build: {
		sourcemap: false,
		minify: false,
	},
});
