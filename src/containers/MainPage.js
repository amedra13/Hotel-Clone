import React from 'react';
import Carousel from '../components/Carousel';
import Description from '../components/Description';
import SlideOffers from '../components/SlideOffers';
import RoomsCarousel from '../components/RoomsCarousel';
import CircleForm from '../components/CircleForm';

const MainPage = () => {
	return (
		<div>
			<Carousel />
			<Description />
			<RoomsCarousel />
			<SlideOffers />
			<CircleForm />
		</div>
	);
};

export default MainPage;
