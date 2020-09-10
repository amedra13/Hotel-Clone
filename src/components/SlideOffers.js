import React from 'react';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from './IndividualSlide';
import slideDetails from './slideDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './slideOffers.css';

export default function SlideOffers() {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div className="App">
			<SlideGrid>
				<IndividualSlide
					info={slideDetails.offers}
					imgContainerStyle="Offers__ImgContainer"
					imgStyle="Offers__img"
				/>
				<IndividualSlide
					info={slideDetails.dining}
					imgContainerStyle="Offers__ImgContainer"
					imgStyle="Offers__img"
					reverse={!match}
				/>
				<IndividualSlide
					info={slideDetails.meetingSpace}
					imgContainerStyle="Offers__ImgContainer"
					imgStyle="Offers__img"
				/>
			</SlideGrid>
		</div>
	);
}
