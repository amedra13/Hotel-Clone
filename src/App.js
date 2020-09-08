import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Description from './components/Description';
import SlideOffers from './components/SlideOffers';

function App() {
	return (
		<div className="App">
			<Header />
			<Carousel />
			<Description />
			<SlideOffers />
		</div>
	);
}

export default App;
