import React from 'react';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import PageHeader from '../components/pageHeader/PageHeader';

import PaloAlto from '../images/Offers/nobu_CityofPaloAlto.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import './dining.css';

const useStyles = makeStyles({
	offersGrid: {
		width: '98vw',
		margin: '50px auto',
		fontSize: '0.9rem',
		fontFamily: 'QuickSand',
	},
});

const Offers = () => {
	const classes = useStyles();
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<div className="Dining__Entrance">
				<img src={PaloAlto} alt="Resturant Entrance" />
			</div>
			<PageHeader
				title="FEATURED OFFERS"
				subtitle="DOWNTOWN PALO ALTO, SILICON VALLEY"
			/>
			<Grid
				container
				alignItems="flex-start"
				className={classes.offersGrid}
				spacing={3}
			>
				<IndividualSlide
					info={slideDetails.cancellation}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide
					info={slideDetails.suites}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
				/>
				<IndividualSlide
					info={slideDetails.tasteOfNobu}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide
					info={slideDetails.cycling}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
				/>
				<IndividualSlide
					info={slideDetails.driveToUs}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide
					info={slideDetails.napa}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
				/>
				<IndividualSlide
					info={slideDetails.localWine}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
					reverse={!match}
				/>
				<IndividualSlide
					info={slideDetails.workWithUs}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
				/>
				<IndividualSlide
					info={slideDetails.stayLonger}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
					reverse={!match}
				/>
			</Grid>
		</div>
	);
};

export default Offers;
