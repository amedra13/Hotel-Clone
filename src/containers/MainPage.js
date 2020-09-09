import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Description from '../components/Description';
import SlideOffers from '../components/SlideOffers';
import RoomsCarousel from '../components/RoomsCarousel';
import CircleForm from '../components/CircleForm';
import Footer from '../components/Footer';

const MainPage = () => {
	return (
		<div>
			<Header />
			<Carousel />
			<Description />
			<RoomsCarousel />
			<SlideOffers />
			<CircleForm />
			<Footer />
		</div>
	);
};

export default MainPage;
