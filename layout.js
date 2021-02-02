// @flow
import React from 'react';
import {View} from 'react-native';

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const gridUnit = 25;

const margins = {
	xxs: gridUnit * 0.25,
	xs: gridUnit * 0.5,
	sm: gridUnit * 0.75,
	md: gridUnit,
	lg: gridUnit * 1.5,
	xl: gridUnit * 2,
	xxl: gridUnit * 3,
	xxxl: gridUnit * 4,
};

export const layout = {
	mt: {
		xxs: {marginTop: margins.xxs},
		xs: {marginTop: margins.xs},
		sm: {marginTop: margins.sm},
		md: {marginTop: margins.md},
		lg: {marginTop: margins.lg},
		xl: {marginTop: margins.xl},
		xxl: {marginTop: margins.xxl},
	},
	mb: {
		xxs: {marginBottom: margins.xxs},
		xs: {marginBottom: margins.xs},
		sm: {marginBottom: gridUnit * 0.75},
		md: {marginBottom: margins.md},
		lg: {marginBottom: margins.lg},
		xl: {marginBottom: margins.xl},
		xxl: {marginBottom: margins.xxl},
	},
	ml: {
		xxs: {marginLeft: margins.xxs},
		xs: {marginLeft: margins.xs},
		sm: {marginLeft: margins.sm},
		md: {marginLeft: margins.md},
		lg: {marginLeft: margins.lg},
		xl: {marginLeft: margins.xl},
		xxl: {marginLeft: margins.xxl},
	},
	mr: {
		xxs: {marginRight: margins.xxs},
		xs: {marginRight: margins.xs},
		sm: {marginRight: gridUnit * 0.75},
		md: {marginRight: margins.md},
		lg: {marginRight: margins.lg},
		xl: {marginRight: margins.xl},
		xxl: {marginRight: margins.xxl},
	},
	my: {
		xxs: {
			marginTop: margins.xxs,
			marginBottom: margins.xxs,
		},
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
	mx: {
		xxs: {
			marginLeft: margins.xxs,
			marginRight: margins.xxs,
		},
		xs: {
			marginLeft: margins.xs,
			marginRight: margins.xs,
		},
		sm: {
			marginLeft: margins.sm,
			marginRight: gridUnit * 0.75,
		},
		md: {
			marginLeft: margins.md,
			marginRight: margins.md,
		},
		lg: {
			marginLeft: margins.lg,
			marginRight: margins.lg,
		},
		xl: {
			marginLeft: margins.xl,
			marginRight: margins.xl,
		},
		xxl: {
			marginLeft: margins.xxl,
			marginRight: margins.xxl,
		},
	},
};

type GridWrapperProps = {
	children: React$Node,
	size?: Size,
	style?: Object | Array<Object>,
};
export const GridWrapper = ({
	children,
	size = 'md',
	style,
}: GridWrapperProps) => {
	const customStyles = style ? (Array.isArray(style) ? style : [style]) : [];
	return (
		<View style={[{flex: 1}, layout.mx[size], ...customStyles]}>
			{children}
		</View>
	);
};
