import React from 'react';
import DiningEntrance from '../images/DiningPage/nobu_Dining.jpg';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import PageHeader from '../components/pageHeader/PageHeader';
import ImgHeader from '../components/imgHeader/ImgHeader';
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
});

const Dining = () => {
	const classes = useStyles();
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<ImgHeader imgSource={DiningEntrance} description="Resturant Entrance" />
			<PageHeader
				title="ICONIC JAPANESE DINING"
				subtitle="NOBU HOTEL IN SILICON VALLEY"
			/>
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
