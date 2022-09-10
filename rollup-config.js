import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import tsConfigPaths from "rollup-plugin-tsconfig-paths";
import dts from "rollup-plugin-dts";

const TSConfig = {
	compilerOptions: {
		lib: ["ESNext"],
		module: "ESNext",
		moduleResolution: "Node",
		target: "ESNext"
	}
}


export default [
	{
		input: 'src/index.ts',
		output: {
			file: 'dist/types/index.d.ts',
			format: 'cjs',
			sourcemap: true
		},
		plugins: [
			tsConfigPaths(),
			resolve({extensions:[".ts", ".d.ts"]}),
			dts()
		]
	},
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/esm/index.mjs',
				format: 'esm',
				sourcemap: true
			},
			{
				file: 'dist/cjs/index.cjs',
				format: 'cjs',
				sourcemap: true
			},
			{
				file: 'dist/common/index.js',
				format: 'cjs',
				sourcemap: true
			}
		],
		plugins: [
			tsConfigPaths(),
			resolve({extensions:[".ts", ".d.ts"]}),
			typescript(TSConfig)
		]
	}
];
