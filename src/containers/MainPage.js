import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Description from '../components/mainDescription/Description';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import { mainData } from '../components/individualSlide/slidedata/slideData';
import RoomsCarousel from '../components/roomsCarousel/RoomsCarousel';
import CircleForm from '../components/circleSignUp/CircleForm';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const MainPage = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<Carousel />
			<Description />
			<RoomsCarousel />
			<SlideGrid>
				<IndividualSlide info={mainData.offers} />
				<IndividualSlide info={mainData.dining} reverse={!match} />
				<IndividualSlide info={mainData.meetingSpace} />
			</SlideGrid>
			<CircleForm />
		</div>
	);
};

export default MainPage;
