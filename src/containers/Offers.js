import React from 'react';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import slideDetails from '../components/slideDetails';
import PageHeader from '../components/pageHeader/PageHeader';
import ImgHeader from '../components/imgHeader/ImgHeader';
import PaloAlto from '../images/Offers/nobu_CityofPaloAlto.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Offers = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<ImgHeader imgSource={PaloAlto} description="Resturant Entrance" />
			<PageHeader
				title="FEATURED OFFERS"
				subtitle="DOWNTOWN PALO ALTO, SILICON VALLEY"
			/>
			<SlideGrid>
				<IndividualSlide
					info={slideDetails.cancellation}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={slideDetails.suites} slideWidth={6} />
				<IndividualSlide
					info={slideDetails.tasteOfNobu}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={slideDetails.cycling} slideWidth={6} />
				<IndividualSlide
					info={slideDetails.driveToUs}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={slideDetails.napa} slideWidth={6} />
				<IndividualSlide
					info={slideDetails.localWine}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={slideDetails.workWithUs} slideWidth={6} />
				<IndividualSlide
					info={slideDetails.stayLonger}
					slideWidth={6}
					reverse={!match}
				/>
			</SlideGrid>
		</div>
	);
};

export default Offers;
