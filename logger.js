// @flow
export type Logger = {
	log: Function,
	warn: Function,
	error: Function,
};

const defaultLogger: Logger = {
	log: console.log,
	warn: console.warn,
	error: console.error,
}

let customLogger;
export const setCustomLogger = (logger: Logger) => customLogger = logger;

const log = (line: any) => {
	if (customLogger && customLogger.log) {
		customLogger.log(line);
	} else {
		if (__DEV__) {
			defaultLogger.log(line);
		}
	}
};

const warn = (message: string) => {
	if (customLogger && customLogger.warn) {
		customLogger.warn(message);
	} else {
		if (__DEV__) {
			defaultLogger.warn(message);
		}
	}
};

const error = (e: Error) => {
	if (customLogger && customLogger.error) {
		customLogger.error(e);
	} else {
		if (__DEV__) {
			defaultLogger.error(e);
		}
	}
};

export default {
	log,
	warn,
	error,
};
