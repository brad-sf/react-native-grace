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
		sm: {marginBottom: margins.md},
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
		sm: {marginRight: margins.md},
		md: {marginRight: margins.md},
		lg: {marginRight: margins.lg},
		xl: {marginRight: margins.xl},
		xxl: {marginRight: margins.xxl},
	},
	my: {
		xxs: {marginVertical: margins.xxs},
		xs: {marginVertical: margins.xs},
		sm: {marginVertical: margins.sm},
		md: {marginVertical: margins.md},
		lg: {marginVertical: margins.lg},
		xl: {marginVertical: margins.xl},
		xxl: {marginVertical: margins.xxl},
	},
	mx: {
		xxs: {marginHorizontal: margins.xxs},
		xs: {marginHorizontal: margins.xs},
		sm: {marginHorizontal: margins.sm},
		md: {marginHorizontal: margins.md},
		lg: {marginHorizontal: margins.lg},
		xl: {marginHorizontal: margins.xl},
		xxl: {marginHorizontal: margins.xxl},
	},
	flex: {
		flex: 1,
	},
	justify: {
		start: {justifyContent: 'flex-start'},
		around: {justifyContent: 'space-around'},
		between: {justifyContent: 'space-between'},
		center: {justifyContent: 'center'},
		evenly: {justifyContent: 'space-evenly'},
		end: {justifyContent: 'flex-end'},
	},
	direction: {
		row: {flexDirection: 'row'},
		rowReverse: {flexDirection: 'row-reverse'},
		column: {flexDirection: 'column'},
		columnReverse: {flexDirection: 'column-reverse'},
	},
	items: {
		start: {alignItems: 'flex-start'},
		center: {alignItems: 'center'},
		stretch: {alignItems: 'stretch'},
		baseline: {alignItems: 'baseline'},
		end: {alignItems: 'flex-end'},
	},
	content: {
		start: {alignContent: 'flex-start'},
		around: {alignContent: 'space-around'},
		between: {alignContent: 'space-between'},
		center: {alignContent: 'center'},
		evenly: {alignContent: 'space-evenly'},
		end: {alignContent: 'flex-end'},
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
