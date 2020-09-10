import React from 'react';
import DiningEntrance from '../images/DiningPage/nobu_Dining.jpg';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import slideDetails from '../components/slideDetails';
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
				<IndividualSlide info={slideDetails.introDining} />
				<IndividualSlide info={slideDetails.inRoomDining} reverse={!match} />
				<IndividualSlide info={slideDetails.nobuAtHome} />
				<IndividualSlide info={slideDetails.offSiteEvents} reverse={!match} />
			</SlideGrid>
		</div>
	);
};

export default Dining;
