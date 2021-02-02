// @flow

const gridUnit = 20;

const margins = {
	xs: gridUnit * 0.5,
	sm: gridUnit * 0.75,
	md: gridUnit,
	lg: gridUnit * 1.25,
	xl: gridUnit * 1.5,
	xxl: gridUnit * 2,
};

export const layout = {
	mt: {
		xs: {marginTop: margins.xs},
		sm: {marginTop: margins.sm},
		md: {marginTop: margins.md},
		lg: {marginTop: margins.lg},
		xl: {marginTop: margins.xl},
		xxl: {marginTop: margins.xxl},
	},
	mb: {
		xs: {marginBottom: margins.xs},
		sm: {marginBottom: gridUnit * 0.75},
		md: {marginBottom: margins.md},
		lg: {marginBottom: margins.lg},
		xl: {marginBottom: margins.xl},
		xxl: {marginBottom: margins.xxl},
	},
	my: {
		xs: {
			marginTop: margins.xs,
			marginBottom: margins.xs,
		},
		sm: {
			marginTop: margins.sm,
			marginBottom: gridUnit * 0.75,
		},
		md: {
			marginTop: margins.md,
			marginBottom: margins.md,
		},
		lg: {
			marginTop: margins.lg,
			marginBottom: margins.lg,
		},
		xl: {
			marginTop: margins.xl,
			marginBottom: margins.xl,
		},
		xxl: {
			marginTop: margins.xxl,
			marginBottom: margins.xxl,
		},
	},
};
