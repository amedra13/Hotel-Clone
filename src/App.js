import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.css';
import MainPage from './containers/MainPage';
import Header from './components/navbar/Header';
import Footer from './components/footer/Footer';
import Rooms from './containers/Rooms';
import Dining from './containers/Dining';
import Offers from './containers/Offers';
import MeetingsAndEvents from './containers/MeetingsAndEvents';
import CovidUpdates from './containers/CovidUpdates';
import BookReservation from './containers/Booking/BookReservation';
import GuestDetails from './containers/Booking/GuestDetails/GuestDetails';
import Confirmation from './containers/Booking/Confirmation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
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
					<Route exact path="/covid">
						<CovidUpdates />
					</Route>
					<Route exact path="/book">
						<BookReservation />
					</Route>
					<Route exact path="/guestdetails">
						<GuestDetails />
						{/* {props.redirect ? <Redirect to="/book" /> : <GuestDetails />} */}
					</Route>
					<Route exact path="/confirmation">
						<Confirmation />
					</Route>
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		redirect: state.room.reDirect,
	};
};

export default connect(mapStateToProps)(App);
