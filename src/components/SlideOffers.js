import React from 'react';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from './IndividualSlide';
import slideDetails from './slideDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './slideOffers.css';

export default function SlideOffers() {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div className="App">
			<Grid container alignItems="flex-start" className="Grid" spacing={4}>
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
			</Grid>
		</div>
	);
}
