module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint", "babel"], // Ajoutez "babel" ici
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": ["error"],
		"@typescript-eslint/explicit-function-return-type": ["error"],
	},
	overrides: [
		{
			files: ["*.ts"],
			rules: {
				// règles spécifiques pour les fichiers .ts si nécessaire
			},
		},
		{
			files: ["dist/**/*.js"],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"@typescript-eslint/explicit-function-return-type": "off",
			},
		},
	],
};
