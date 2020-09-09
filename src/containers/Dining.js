import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DiningEntrance from '../images/DiningPage/nobu_Dining.jpg';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import './dining.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	grid: {
		width: '98vw',
		margin: '50px auto',
		textAlign: 'center',
		fontSize: '0.8rem',
		fontFamily: 'QuickSand',
	},
	diningHeader: {
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'QuickSand',
	},
});

const Dining = () => {
	const classes = useStyles();

	return (
		<div>
			<Header />
			<div className="Dining__Entrance">
				<img src={DiningEntrance} alt="Resturant Entrance" />
			</div>
			<div className={classes.diningHeader}>
				<h5>
					<i>NOBU HOTEL IN SILICON VALLEY</i>
				</h5>
				<h1>ICONIC JAPANESE DINING</h1>
			</div>
			<Grid container alignItems="stretch" className={classes.grid} spacing={4}>
				<IndividualSlide
					info={slideDetails.introDining}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
				/>
				<IndividualSlide
					info={slideDetails.inRoomDining}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					reverse
				/>
				<IndividualSlide
					info={slideDetails.nobuAtHome}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
				/>
				<IndividualSlide
					info={slideDetails.offSiteEvents}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					reverse
				/>
			</Grid>
			<Footer />
		</div>
	);
};

export default Dining;
