import React from 'react';
import Carousel from 'react-material-ui-carousel';
import balcony from '../../images/MainPage/nobu_balcony.jpg';
import interior from '../../images/MainPage/nobu_roomInt.jpg';
import './roomsCarousel.css';

const RoomsCarousel = (props) => {
	return (
		<Carousel
			navButtonsAlwaysVisible
			animation="fade"
			className="roomsCarousel"
		>
			<div className="roomsCarousel__ImgContainer ">
				<img className="Carousel__Img" src={balcony} alt="Nobu Balcony" />
			</div>
			<div className="roomsCarousel__ImgContainer">
				<img className="Carousel__Img" src={interior} alt="Nobu Balcony" />
			</div>
		</Carousel>
	);
};
export default RoomsCarousel;
