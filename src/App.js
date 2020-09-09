import React from 'react';
import './App.css';
import MainPage from './containers/MainPage';
import Rooms from './containers/Rooms';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<MainPage />
					</Route>
					<Route exact path="/rooms">
						<Rooms />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
