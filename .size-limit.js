module.exports = [
	{
		name: 'i18n-string',
		path: 'dist/i18n.string.min.js',
		limit: '993 b',
	},
	{
		name: 'typed-i18n-string',
		path: 'dist/i18n.typed.string.min.js',
		limit: '998 b',
	},
	{
		name: 'i18n-object',
		path: 'dist/i18n.object.min.js',
		limit: '1144 b',
	},
	{
		name: 'typed-i18n-object',
		path: 'dist/i18n.typed.object.min.js',
		limit: '1139 b',
	},
	{
		name: 'i18n-instance',
		path: 'dist/i18n.instance.min.js',
		limit: '1165 b',
	},
	{
		name: 'all together',
		path: 'dist/i18n.all.min.js',
		limit: '1237 b',
	},
	{
		name: 'adapter-angular',
		path: 'angular/index.min.mjs',
		limit: '1441 b',
		ignore: ['angular'],
	},
	{
		name: 'adapter-react',
		path: 'react/index.min.mjs',
		limit: '1620 b',
		ignore: ['react'],
	},
	{
		name: 'adapter-solid',
		path: 'solid/index.min.mjs',
		limit: '1449 b',
		ignore: ['solid-js'],
	},
	{
		name: 'adapter-svelte',
		path: 'svelte/index.min.mjs',
		limit: '1386 b',
		ignore: ['svelte'],
	},
	{
		name: 'adapter-vue',
		path: 'vue/index.min.mjs',
		limit: '1300 b',
		ignore: ['vue'],
	},
]
