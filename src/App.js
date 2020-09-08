import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Description from './components/Description';
import SlideOffers from './components/SlideOffers';
import RoomsCarousel from './components/RoomsCarousel';
import CircleForm from './components/CircleForm';

function App() {
	return (
		<div className="App">
			<Header />
			<Carousel />
			<Description />
			<RoomsCarousel />
			<SlideOffers />
			<CircleForm />
		</div>
	);
}

export default App;
