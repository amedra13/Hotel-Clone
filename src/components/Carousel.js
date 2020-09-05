import React from 'react';
import Carousel from 'react-material-ui-carousel';
import hotelEntrance from '../images/MainPage/nobu_hotelEntrance.jpg';
import insideBuilding from '../images/MainPage/nobu_insideBuilding.jpg';
import meetingSpace from '../images/MainPage/nobu_MeetingSpace.jpg';
import restuarantEntrance from '../images/MainPage/nobu_restuarantEntrance.jpg';
import waitingRoom from '../images/MainPage/nobu_waitingRoom.jpg';
import './carousel.css';

const CarouselComponent = () => {
	return (
		<Carousel navButtonsAlwaysVisible animation="fade">
			<div className="Carousel__ImgContainer">
				<img
					className="Carousel__Img"
					src={hotelEntrance}
					alt="Nobu Building"
				/>
			</div>
			<div className="Carousel__ImgContainer">
				<img
					className="Carousel__Img"
					src={insideBuilding}
					alt="Nobu Check In"
				/>
			</div>
			<div className="Carousel__ImgContainer">
				<img
					className="Carousel__Img higherImg"
					src={meetingSpace}
					alt="Nobu Meeting Space"
				/>
			</div>
			<div className="Carousel__ImgContainer">
				<img
					className="Carousel__Img"
					src={restuarantEntrance}
					alt="Nobu Restuarant Entrance"
				/>
			</div>
			<div className="Carousel__ImgContainer">
				<img
					className="Carousel__Img higherImg"
					src={waitingRoom}
					alt="Nobu Waiting Room"
				/>
			</div>
		</Carousel>
	);
};

export default CarouselComponent;
