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
				{
					label: 'Application',
					collapsed: true,
					items: []
				},
				{
					label: 'Server',
					collapsed: true,
					items: [
						{
							label: 'Overview', link: '/server'
						},
						{
							label: 'Installation', link: '/server/install'
						},
						{
							label: 'Configuration',
							items: [
								{
									label: 'Environment variables', link: '/server/configuration'
								},
								{
									label: 'Last.fm integration', link: '/server/configuration/lastfm'
								},
								{
									label: 'Hosting a web client', link: '/server/configuration/frontend'
								}
							]
						},
						{
							label: 'Admin CLI', link: '/server/admin'
						}
					]
				},
			]
		}),
	],
});
