import React from 'react';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import { offersData } from '../components/individualSlide/slidedata/slideData';
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
					info={offersData.cancellation}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={offersData.suites} slideWidth={6} />
				<IndividualSlide
					info={offersData.tasteOfNobu}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={offersData.cycling} slideWidth={6} />
				<IndividualSlide
					info={offersData.driveToUs}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={offersData.napa} slideWidth={6} />
				<IndividualSlide
					info={offersData.localWine}
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide info={offersData.workWithUs} slideWidth={6} />
				<IndividualSlide
					info={offersData.stayLonger}
					slideWidth={6}
					reverse={!match}
				/>
			</SlideGrid>
		</div>
	);
};

export default Offers;
