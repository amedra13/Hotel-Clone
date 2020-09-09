import React from 'react';
import './App.css';
import MainPage from './containers/MainPage';
import Rooms from './containers/Rooms';
import Dining from './containers/Dining';
import Offers from './containers/Offers';
import MeetingsAndEvents from './containers/MeetingsAndEvents';
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
					<Route exact path="/dining">
						<Dining />
					</Route>
					<Route exact path="/offers">
						<Offers />
					</Route>
					<Route exact path="/events">
						<MeetingsAndEvents />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
