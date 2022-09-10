const PLUGIN_NAME = 'vite-plugin-dts-remaster';
function DeclRemaster(config) {
    return {
        name: PLUGIN_NAME,
        transform: (src, id) => {
            return {
                code: src,
                map: null
            };
        }
    };
}

export { DeclRemaster, PLUGIN_NAME };
//# sourceMappingURL=index.mjs.map
