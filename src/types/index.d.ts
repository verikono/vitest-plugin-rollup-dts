import type { UserConfig } from "vitest";


/** The working directory for this plugin */
export type DeclarationRootDirectory = string;

/** A file glob that describes all declartion files in your project, relative to the root ( @see DeclarationRootDirectory ) */
export type DeclarationFileGlob = string;

export interface DeclRemasterConfig {
	declarationRoot?:DeclarationRootDirectory;
	declarationFiles?:DeclarationFileGlob;
}

export interface ViteConfig extends UserConfig {
	DeclRemasterConfig: DeclRemasterConfig;
}
