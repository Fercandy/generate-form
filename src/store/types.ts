interface ArrType {
	label: string;
	type: string;
}

export interface StoreState {
	title: string;
	items: Array<ArrType>;
}

export interface ApplyDataValue {
	type: string;
	payload: StoreState;
}
