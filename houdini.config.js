/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	// schema: './schema.graphql',
	watchSchema: {
		url: 'https://mock.shop/api'
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
