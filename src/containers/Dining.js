import React from 'react';
import DiningEntrance from '../images/DiningPage/nobu_Dining.jpg';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import { diningData } from '../components/individualSlide/slidedata/slideData';
import PageHeader from '../components/pageHeader/PageHeader';
import ImgHeader from '../components/imgHeader/ImgHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Dining = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<ImgHeader imgSource={DiningEntrance} description="Resturant Entrance" />
			<PageHeader
				title="ICONIC JAPANESE DINING"
				subtitle="NOBU HOTEL IN SILICON VALLEY"
			/>
			<SlideGrid>
				<IndividualSlide info={diningData.introDining} />
				<IndividualSlide info={diningData.inRoomDining} reverse={!match} />
				<IndividualSlide info={diningData.nobuAtHome} />
				<IndividualSlide info={diningData.offSiteEvents} reverse={!match} />
			</SlideGrid>
		</div>
	);
};

export default Dining;
