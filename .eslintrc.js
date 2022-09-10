module.exports = {
	env: {
		node: true
	},
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	plugins: [
		"@typescript-eslint"
	],
	rules:{
		"triple-slash-reference": 0
	}
};