// @flow
import type {Logger} from './logger';
import {setCustomLogger} from './logger';

export type ConfigureProps = {
	logger: Logger
}

export const configure = ({logger}: ConfigureProps) => {

	if (typeof logger == 'object') {
		setCustomLogger(logger)
	}
}
