import type { DeclRemasterConfig } from "types";
import * as hooks from 'hooks';
import * as config from 'config';

export const PLUGIN_NAME = 'vite-plugin-dts-remaster';

export function DeclRemaster( config:DeclRemasterConfig ) {

	Object.keys(config);

	return {
		name: PLUGIN_NAME,
		transform: (src, id:string) => {
			return {
				code: src,
				map: null
			}
		}
	}
}
