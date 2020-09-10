import React from 'react';
import DiningEntrance from '../images/DiningPage/nobu_Dining.jpg';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import './dining.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	grid: {
		width: '98vw',
		margin: '50px auto',
		fontSize: '0.85rem',
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
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<div className="Dining__Entrance">
				<img src={DiningEntrance} alt="Resturant Entrance" />
			</div>
			<div className={classes.diningHeader}>
				<h5>
					<i>NOBU HOTEL IN SILICON VALLEY</i>
				</h5>
				<h1>ICONIC JAPANESE DINING</h1>
			</div>
			<Grid
				container
				alignItems="flex-start"
				className={classes.grid}
				spacing={4}
			>
				<IndividualSlide
					info={slideDetails.introDining}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
				/>
				<IndividualSlide
					info={slideDetails.inRoomDining}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					reverse={!match}
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
					reverse={!match}
				/>
			</Grid>
		</div>
	);
};

export default Dining;
