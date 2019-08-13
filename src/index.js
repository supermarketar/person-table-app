import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';
import modalReducer from './reducers/modalReducer.js';
import personReducer from './reducers/personReducer.js';
import {BrowserRouter,Route} from 'react-router-dom';
import ViewDetails from './components/ViewDetails/ViewDetails.js';

const reducers = combineReducers({
	modalState: modalReducer,
	personState: personReducer
});
const store = createStore(reducers,applyMiddleware(logger));

ReactDom.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route exact path="/" component={App} />
			<Route path="/user/:id" component={ViewDetails} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);