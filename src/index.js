import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dateReducer from './store/reducers/dateReducer';
import roomReducer from './store/reducers/roomReducer';
import confirmationReducer from './store/reducers/confirmationReducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
	date: dateReducer,
	room: roomReducer,
	confirmation: confirmationReducer,
});

const store = createStore(rootReducer);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
