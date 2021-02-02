module.exports = {
	root: true,
	extends: '@react-native-community',
	plugins: ['flowtype'],
	rules: {
		'no-void': 'off',
		'jsx-quotes': ['error', 'prefer-single'],
		curly: 'off',
		'flowtype/require-valid-file-annotation': [2, 'always'],
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
	},
	env: {
		jest: true,
	},
};
