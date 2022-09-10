import type { ViteDevServer } from "vite";
import type { DeclRemasterConfig } from "@types";

export default function GetPluginConfig( server:ViteDevServer ):DeclRemasterConfig {

	console.log(server);
	throw new Error('Unimplemented');
}