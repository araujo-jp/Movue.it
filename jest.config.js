module.exports = {
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^~/(.*)$': '<rootDir>/$1',
		'^vue$': 'vue/dist/vue.common.js',
	},
	moduleFileExtensions: [
		'ts',
		'js',
		'vue',
		'json',
	],
	transform: {
		"^.+\\.ts$": "ts-jest",
		'^.+\\.js$': 'babel-jest',
		'.*\\.(vue)$': 'vue-jest',
	},
	collectCoverage: false,
	collectCoverageFrom: [
		'<rootDir>/components/**/*.vue',
		'<rootDir>/pages/**/*.vue',
		'<rootDir>/store/**/*.vue',
		'<rootDir>/utils/**/*.vue',
		'<rootDir>/layouts/**/*.vue',
		'!<rootDir>/**/types.ts',
	],
	testEnvironment: 'jsdom',
};
