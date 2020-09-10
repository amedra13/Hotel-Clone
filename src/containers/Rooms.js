import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import Carousel from 'react-material-ui-carousel';
import bathroom from '../images/Rooms/nobu_bathroom.jpg';
import bedroom from '../images/Rooms/nobu_bedroom.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import roomType from '../components/roomsDescriptions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import './dining.css';

const useStyles = makeStyles({
	roomsGrid: {
		width: '98vw',
		margin: '20px auto',
		fontSize: '0.85rem',
		fontFamily: 'QuickSand',
	},

	imgContainer: {
		height: 'auto',
		maxHeight: '60vh',
		width: '100vw',
		overflow: 'hidden',
	},
	carouselImg: {
		height: 'auto',
		width: '100%',
		objectFit: 'contain',
	},
	'@media (min-width:800px)': {
		carouselImg: {
			transform: 'translateY(-35%)',
		},
	},
	featuresGrid: {
		width: '80vw',
		margin: '0 auto',
		fontSize: '0.85rem',
		fontFamily: 'QuickSand',
	},
	features: {
		border: '1px solid black',
		padding: '10px',
		borderRadius: '5px',
	},
	roomsHeader: {
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'QuickSand',
	},
});

const Rooms = () => {
	const classes = useStyles();
	const match = useMediaQuery('(max-width:600px)');

	return (
		<div>
			<Header />
			<Grid
				container
				alignItems="flex-start"
				className={classes.featuresGrid}
				spacing={3}
				direction={match && 'column-reverse'}
			>
				<Grid item xs={12} sm={4} fullWidth>
					<div className={classes.features}>
						<h2>Features</h2>
						<List>
							{roomType.Accessible.features.map((feature) => {
								return <ListItem>{feature}</ListItem>;
							})}
						</List>
					</div>
				</Grid>
				<Grid item xs={12} sm={8} fullWidth>
					<div className="RoomType">
						<h2>{roomType.Accessible.title}</h2>
						<p>{roomType.Accessible.description}</p>
						<p>
							<i>{roomType.Accessible.subDescription}</i>
						</p>
					</div>
				</Grid>
			</Grid>
			<div className={classes.roomsHeader}>
				<h5>
					<i>HOTEL IN PALO ALTO, NEAR STANFORD</i>
				</h5>
				<h1>ROOMS & SUITES</h1>
			</div>
			<Carousel navButtonsAlwaysVisible animation="fade">
				<div className={classes.imgContainer}>
					<img
						className={classes.carouselImg}
						src={bedroom}
						alt="Nobu Bedroom"
					/>
				</div>
				<div className={classes.imgContainer}>
					<img
						className={classes.carouselImg}
						src={bathroom}
						alt="Nobu Bathroom"
					/>
				</div>
			</Carousel>
			<Grid
				container
				alignItems="flex-start"
				className={classes.roomsGrid}
				spacing={4}
			>
				<IndividualSlide
					info={slideDetails.exploreOffers}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
				/>
			</Grid>
			<Footer />
		</div>
	);
};

export default Rooms;
