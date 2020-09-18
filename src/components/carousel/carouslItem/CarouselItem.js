import React from 'react';
import './carouselItem.css';

const CarouselItem = (props) => {
	return (
		<div className="Carousel__ImgContainer">
			<img
				className="Carousel__Img"
				src={props.imgSource}
				alt={props.description}
			/>
		</div>
	);
};

export default CarouselItem;
