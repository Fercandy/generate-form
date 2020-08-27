import { combineReducers } from 'redux';
import { dataReducer } from './store/reducer';

const rootReducer = combineReducers({
	data: dataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
