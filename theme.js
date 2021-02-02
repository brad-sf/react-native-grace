// @flow

/**
 * OPACITY
 */
export const opacity = {
	'0': {opacity: 0},
	'10': {opacity: 0.1},
	'20': {opacity: 0.2},
	'25': {opacity: 0.25},
	'30': {opacity: 0.3},
	'40': {opacity: 0.4},
	'50': {opacity: 0.5},
	'60': {opacity: 0.6},
	'70': {opacity: 0.7},
	'75': {opacity: 0.75},
	'80': {opacity: 0.8},
	'90': {opacity: 0.9},
	'95': {opacity: 0.95},
	'100': {opacity: 1},
};

/**
 * COLORS
 */
export const color = {
	white: 'hsla(0, 0%, 100%, 1)',
	gray100: 'hsla(0, 0%, 90%, 1)',
	gray200: 'hsla(0, 0%, 80%, 1)',
	gray300: 'hsla(0, 0%, 70%, 1)',
	gray400: 'hsla(0, 0%, 60%, 1)',
	gray500: 'hsla(0, 0%, 50%, 1)',
	gray600: 'hsla(0, 0%, 40%, 1)',
	gray700: 'hsla(0, 0%, 30%, 1)',
	gray800: 'hsla(0, 0%, 20%, 1)',
	gray900: 'hsla(0, 0%, 10%, 1)',
	black: 'hsla(0, 0%, 0%, 1)',
};

/**
 * FONT SIZES
 */
const baseFontSize = 16;
const baseFontMultipliers = {
	xs: [0.5, 0.6, 0.7],
	sm: [0.75, 0.8, 0.85],
	md: [0.95, 1, 1.1],
	lg: [1.25, 1.4, 1.6],
	xl: [1.5, 1.75, 2],
	xxl: [1.75, 2, 2.5],
	xxxl: [3, 4, 5],
};
export const fontSize = {
	xs: baseFontSize * responsive(...baseFontMultipliers.xs),
	sm: baseFontSize * responsive(...baseFontMultipliers.sm),
	md: baseFontSize * responsive(...baseFontMultipliers.md),
	lg: baseFontSize * responsive(...baseFontMultipliers.lg),
	xl: baseFontSize * responsive(...baseFontMultipliers.xl),
	xxl: baseFontSize * responsive(...baseFontMultipliers.xxl),
	xxxl: baseFontSize * responsive(...baseFontMultipliers.xxxl),
};
