// @flow
import {View} from 'react-native';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const gridUnit = 25;

const margins = {
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
	ml: {
		xs: {marginLeft: margins.xs},
		sm: {marginLeft: margins.sm},
		md: {marginLeft: margins.md},
		lg: {marginLeft: margins.lg},
		xl: {marginLeft: margins.xl},
		xxl: {marginLeft: margins.xxl},
	},
	mr: {
		xs: {marginRight: margins.xs},
		sm: {marginRight: gridUnit * 0.75},
		md: {marginRight: margins.md},
		lg: {marginRight: margins.lg},
		xl: {marginRight: margins.xl},
		xxl: {marginRight: margins.xxl},
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
	mx: {
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
	size: Size,
	style: Object | Array<Object>,
};
export const GridWrapper = ({
	children,
	size = 'md',
	style,
}: GridWrapperProps) => {
	const gridWrapperStyle = {
		marginHorizontal: layout.mx[size],
	};
	const customStyles = style
		? Array.isArray(style)
			? style
			: [style]
		: null;
	return <View style={[gridWrapperStyle, ...customStyles]}>{children}</View>;
};
