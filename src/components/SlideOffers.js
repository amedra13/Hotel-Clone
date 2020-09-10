import React from 'react';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from './individualSlide/IndividualSlide';
import { mainData } from './individualSlide/slidedata/slideData';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SlideOffers() {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div className="App">
			<SlideGrid>
				<IndividualSlide info={mainData.offers} />
				<IndividualSlide info={mainData.dining} reverse={!match} />
				<IndividualSlide info={mainData.meetingSpace} />
			</SlideGrid>
		</div>
	);
}
