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
					items: [
						{
							label: 'Overview', link: '/app'
						},
						{
							label: 'Installation',
							items: [
								{
									label: 'Platform overview', link: '/app/install'
								},
								{
									label: 'Windows', link: '/app/install/windows'
								},
								{
									label: 'macOS', link: '/app/install/macos'
								},
								{
									label: 'Linux', link: '/app/install/linux'
								},
								{
									label: 'Android', link: '/app/install/android'
								},
								{
									label: 'Web', link: '/app/install/web'
								},
							]
						},
						{
							label: 'Guides',
							items: [
								{
									label: 'How to share logs', link: '/app/guides/share-logs'
								}
							]
						}
					]
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
						},
						{
							label: 'Tips for your music library', link: '/server/music-library'
						},
						{
							label: 'List of supported tags', link: '/server/supported-tags'
						},
						{
							label: 'Backups', link: '/server/backups'
						},
						{
							label: 'API Documentation',
							items: [
								{
									label: 'API Overview', link: '/server/api'
								},
								{
									label: 'OpenSubsonic',
									collapsed: true,
									items: [
										{
											label: 'Overview', link: '/server/api/opensubsonic'
										},
										{ label: 'ping', link: '/server/api/opensubsonic/ping'},
										{ label: 'getLicense', link: '/server/api/opensubsonic/getlicense'},
										{ label: 'getOpenSubsonicExtensions', link: '/server/api/opensubsonic/getopensubsonicextensions'},
										{ label: 'startScan', link: '/server/api/opensubsonic/startscan'},
										{ label: 'getScanStatus', link: '/server/api/opensubsonic/getscanstatus'},
										{ label: 'setRating', link: '/server/api/opensubsonic/setrating'},
										{ label: 'star', link: '/server/api/opensubsonic/star'},
										{ label: 'unstar', link: '/server/api/opensubsonic/unstar'},
										{ label: 'getCoverArt', link: '/server/api/opensubsonic/getcoverart'},
										{ label: 'getGenres', link: '/server/api/opensubsonic/getgenres'},
										{ label: 'getMusicDirectory', link: '/server/api/opensubsonic/getmusicdirectory'},
										{ label: 'getIndexes', link: '/server/api/opensubsonic/getindexes'},
										{ label: 'getArtists', link: '/server/api/opensubsonic/getartists'},
										{ label: 'getAlbumList', link: '/server/api/opensubsonic/getalbumlist'},
										{ label: 'getAlbumList2', link: '/server/api/opensubsonic/getalbumlist2'},
										{ label: 'getRandomSongs', link: '/server/api/opensubsonic/getrandomsongs'},
										{ label: 'getAlbum', link: '/server/api/opensubsonic/getalbum'},
										{ label: 'getArtist', link: '/server/api/opensubsonic/getartist'},
										{ label: 'stream', link: '/server/api/opensubsonic/stream'},
										{ label: 'download', link: '/server/api/opensubsonic/download'},
										{ label: 'scrobble', link: '/server/api/opensubsonic/scrobble'},
										{ label: 'getNowPlaying', link: '/server/api/opensubsonic/getnowplaying'},
										{ label: 'search3', link: '/server/api/opensubsonic/search3'},
										{ label: 'getLyrics', link: '/server/api/opensubsonic/getlyrics'},
										{ label: 'getLyricsBySongId', link: '/server/api/opensubsonic/getlyricsbysongid'},
										{ label: 'getPlaylists', link: '/server/api/opensubsonic/getplaylists'},
										{ label: 'getPlaylist', link: '/server/api/opensubsonic/getplaylist'},
										{ label: 'createPlaylist', link: '/server/api/opensubsonic/createplaylist'},
										{ label: 'updatePlaylist', link: '/server/api/opensubsonic/updateplaylist'},
										{ label: 'deletePlaylist', link: '/server/api/opensubsonic/deleteplaylist'},
										{ label: 'getSong', link: '/server/api/opensubsonic/getsong'},
										{ label: 'getStarred', link: '/server/api/opensubsonic/getstarred'},
										{ label: 'getStarred2', link: '/server/api/opensubsonic/getstarred2'},
										{ label: 'getSongsByGenre', link: '/server/api/opensubsonic/getsongsbygenre'},
										{ label: 'getAlbumInfo', link: '/server/api/opensubsonic/getalbuminfo'},
										{ label: 'getAlbumInfo2', link: '/server/api/opensubsonic/getalbuminfo2'},
										{ label: 'getArtistInfo', link: '/server/api/opensubsonic/getartistinfo'},
										{ label: 'getArtistInfo2', link: '/server/api/opensubsonic/getartistinfo2'},
										{ label: 'getInternetRadioStations', link: '/server/api/opensubsonic/getinternetradiostations'},
										{ label: 'createInternetRadioStation', link: '/server/api/opensubsonic/createinternetradiostation'},
										{ label: 'updateInternetRadioStation', link: '/server/api/opensubsonic/updateinternetradiostation'},
										{ label: 'deleteInternetRadioStation', link: '/server/api/opensubsonic/deleteinternetradiostation'},
									]
								},
								{
									label: 'Crossonic',
									collapsed: true,
									items: [
										{
											label: 'Overview', link: '/server/api/crossonic'
										},
										{ label: 'connectListenBrainz', link: '/server/api/crossonic/connectlistenbrainz'},
										{ label: 'getListenBrainzConfig', link: '/server/api/crossonic/getlistenbrainzconfig'},
										{ label: 'updateListenBrainzConfig', link: '/server/api/crossonic/updatelistenbrainzconfig'},
										{ label: 'setPlaylistCover', link: '/server/api/crossonic/setplaylistcover'},
										{ label: 'getRecap', link: '/server/api/crossonic/getrecap'},
										{ label: 'getTopSongsRecap', link: '/server/api/crossonic/gettopsongsrecap'},
										{ label: 'getAppearsOn', link: '/server/api/crossonic/getappearson'},
										{ label: 'getSongs', link: '/server/api/crossonic/getsongs'},
										{ label: 'getAlternateAlbumVersions', link: '/server/api/crossonic/getalternatealbumversions'},
									]
								}
							]
						}
					]
				},
			]
		}),
	],
});
