import { DATA_APPLIED } from './actionTypes';
import { ApplyDataValue, StoreState } from './types';

export const applyDataValue = (values: StoreState): ApplyDataValue => {
	return {
		type: DATA_APPLIED,
		payload: values,
	};
};
