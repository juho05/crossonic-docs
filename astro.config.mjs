// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Crossonic',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/juho05/crossonic' }],
			logo: {
				src: './src/assets/logo.svg',
			},
			customCss: [
				'./src/custom.css',
			],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Application',
					items: []
				},
				{
					label: 'Server',
					items: []
				},
			]
		}),
	],
});
