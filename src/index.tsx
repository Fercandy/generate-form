import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './combineReducers';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './App';

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
