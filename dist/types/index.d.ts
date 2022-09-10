/** The working directory for this plugin */
type DeclarationRootDirectory = string;

/** A file glob that describes all declartion files in your project, relative to the root ( @see DeclarationRootDirectory ) */
type DeclarationFileGlob = string;

interface DeclRemasterConfig {
	declarationRoot?:DeclarationRootDirectory;
	declarationFiles?:DeclarationFileGlob;
}

declare const PLUGIN_NAME = "vite-plugin-dts-remaster";
declare function DeclRemaster(config: DeclRemasterConfig): {
    name: string;
    transform: (src: any, id: string) => {
        code: any;
        map: any;
    };
};

export { DeclRemaster, PLUGIN_NAME };
//# sourceMappingURL=index.d.ts.map
