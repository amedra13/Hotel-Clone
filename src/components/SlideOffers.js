import React from 'react';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from './individualSlide/IndividualSlide';
import slideDetails from './slideDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SlideOffers() {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div className="App">
			<SlideGrid>
				<IndividualSlide info={slideDetails.offers} />
				<IndividualSlide info={slideDetails.dining} reverse={!match} />
				<IndividualSlide info={slideDetails.meetingSpace} />
			</SlideGrid>
		</div>
	);
}
