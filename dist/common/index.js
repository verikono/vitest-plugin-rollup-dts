'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.DeclRemaster = DeclRemaster;
exports.PLUGIN_NAME = PLUGIN_NAME;
//# sourceMappingURL=index.js.map
