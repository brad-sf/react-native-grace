// @flow
import AsyncStorage from '@react-native-community/async-storage';

import logger from './logger';

export const set = async (key: string, value: mixed): Promise<void> => {
	try {
		if (
			typeof value === 'undefined' ||
			typeof key === 'undefined' ||
			!key ||
			key.length < 1
		) {
			logger.error(new Error('localStorage set undefined value or key'));
			return;
		}
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		logger.error(e);
	}
};

export const get = async (key: string): Promise<mixed> => {
	try {
		const value: string | null = await AsyncStorage.getItem(key);
		return value && value.length ? JSON.parse(value) : null;
	} catch (e) {
		logger.error(e);
		return null;
	}
};

export const remove = async (key: string): Promise<void> => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		logger.error(e);
	}
};
