// @flow
import {Dimensions} from 'react-native';

export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;

/**
 * Breakpoints
 */
export const bpPhoneSmall = 320; // iPhone SE
export const bpPhoneMedium = 375; // iPhone 7 / iPhone 11 << iPhone 8 Plus / iPhone XR
export const bpTabletSmall = 600; // >> iPad Mini 4 >>
export const bpTabletMedium = 834; // iPad Pro 9.7-inch >>
export const bpTabletLarge = 1024; // iPad Pro 12.9-inch >>

/**
 * Check Utils
 */
const isPhoneSmall = screenWidth <= bpPhoneSmall;
const isPhoneMedium =
	screenWidth > bpPhoneSmall && screenWidth <= bpPhoneMedium;
const isPhoneLarge = screenWidth > bpPhoneMedium && screenWidth < bpTabletSmall;
const isTabletSmall =
	screenWidth >= bpTabletSmall && screenWidth < bpTabletMedium;
const isTabletMedium =
	screenWidth >= bpTabletMedium && screenWidth < bpTabletLarge;
const isTabletLarge = screenWidth >= bpTabletLarge;

export const isPhone = screenWidth < bpTabletSmall;
export const isTablet = !isPhone;

/**
 * Method Utils
 */
export const responsive = (
	pS: number,
	pM: number = pS,
	pL: number = pM,
	tS: number = pL,
	tM: number = tS,
	tL: number = tM,
) => {
	return isPhoneSmall
		? pS
		: isPhoneMedium
		? pM
		: isPhoneLarge
		? pL
		: isTabletSmall
		? tS
		: isTabletMedium
		? tM
		: isTabletLarge
		? tL
		: 0;
};

export const getImageHeight = (
	imageWidth: number,
	imageHeight: number,
	desiredWidth: number,
) => (imageHeight / imageWidth) * desiredWidth;
