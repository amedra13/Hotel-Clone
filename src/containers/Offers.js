import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import PaloAlto from '../images/Offers/nobu_CityofPaloAlto.jpg';
import { makeStyles } from '@material-ui/core/styles';
import './dining.css';

const useStyles = makeStyles({
	offersGrid: {
		width: '98vw',
		margin: '100px auto',
		fontSize: '0.8rem',
		fontFamily: 'QuickSand',
	},
	offersHeader: {
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'QuickSand',
	},
});

const Offers = () => {
	const classes = useStyles();

	return (
		<div>
			<Header />
			<div className="Dining__Entrance">
				<img className="higher" src={PaloAlto} alt="Resturant Entrance" />
			</div>
			<div className={classes.offersHeader}>
				<h5>
					<i>DOWNTOWN PALO ALTO, SILICON VALLEY</i>
				</h5>
				<h1>FEATURED OFFERS</h1>
			</div>
			<Grid
				container
				alignItems="stretch"
				className={classes.offersGrid}
				spacing={3}
			>
				<IndividualSlide
					info={slideDetails.cancellation}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					slideWidth={6}
					reverse
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
					reverse
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
					reverse
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
					reverse
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
					reverse
				/>
			</Grid>
			<Footer />
		</div>
	);
};

export default Offers;
