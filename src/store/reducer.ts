import { DATA_APPLIED } from './actionTypes';
import { ApplyDataValue, StoreState } from './types';

const initialState: StoreState = {
	title: '',
	items: [],
};

export const dataReducer = (state = initialState, action: ApplyDataValue) => {
	switch (action.type) {
		case DATA_APPLIED:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
