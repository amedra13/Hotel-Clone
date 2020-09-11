import React from 'react';
import Carousel from 'react-material-ui-carousel';
import hotelEntrance from '../../images/MainPage/nobu_hotelEntrance.jpg';
import insideBuilding from '../../images/MainPage/nobu_insideBuilding.jpg';
import meetingSpace from '../../images/MainPage/nobu_MeetingSpace.jpg';
import restuarantEntrance from '../../images/MainPage/nobu_restuarantEntrance.jpg';
import waitingRoom from '../../images/MainPage/nobu_waitingRoom.jpg';
import CarouselItem from './carouslItem/CarouselItem';

const CarouselComponent = () => {
	return (
		<Carousel navButtonsAlwaysVisible animation="fade">
			<CarouselItem imgSource={hotelEntrance} description="Nobu Building" />
			<CarouselItem imgSource={insideBuilding} description="Nobu Check In" />
			<CarouselItem imgSource={meetingSpace} description="Nobu Meeting Space" />
			<CarouselItem
				imgSource={restuarantEntrance}
				description="Nobu Restuarant Entrance"
			/>
			<CarouselItem imgSource={waitingRoom} description="Nobu Waiting Room" />
		</Carousel>
	);
};

export default CarouselComponent;
