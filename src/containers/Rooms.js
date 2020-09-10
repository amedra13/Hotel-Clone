import React, { useState } from 'react';
import SlideGrid from '../hoc/SlideGrid';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import slideDetails from '../components/slideDetails';
import Carousel from 'react-material-ui-carousel';
import bathroom from '../images/Rooms/nobu_bathroom.jpg';
import bedroom from '../images/Rooms/nobu_bedroom.jpg';
import waitingRoom from '../images/MainPage/nobu_waitingRoom.jpg';
import balcony from '../images/MainPage/nobu_balcony.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import roomType from '../components/roomsDescriptions';
import PageHeader from '../components/pageHeader/PageHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
		width: '75vw',
		margin: '0 auto',
		fontSize: '0.85rem',
		fontFamily: 'QuickSand',
	},
	features: {
		border: '1px solid black',
		padding: '10px',
		borderRadius: '5px',
	},
	roomsCarousel: {
		margin: '10px auto',
		width: '75vw',
	},
	roomsContainer: {
		height: 'auto',
		maxHeight: '150px',
		width: '100%',
		overflow: 'hidden',
	},
	roomsImg: {
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	},
});

const Rooms = () => {
	const [featured, setFeatured] = useState(roomType.Deluxe);
	const [imgSource, setImgSource] = useState(bedroom);
	const classes = useStyles();
	const match = useMediaQuery('(max-width:600px)');

	const onClickHandler = (roomType, name) => {
		setFeatured(roomType);
		switch (name) {
			case 'Deluxe':
				setImgSource(bedroom);
				break;
			case 'Premium':
				setImgSource(waitingRoom);
				break;
			case 'Suites':
				setImgSource(balcony);
				break;
			case 'Accessible':
				setImgSource(bedroom);
				break;
			default:
				return;
		}
	};
	return (
		<div>
			<div className={classes.imgContainer}>
				<img className={classes.carouselImg} src={imgSource} alt="" />
			</div>
			<Grid
				className={classes.roomsCarousel}
				container
				justify="center"
				spacing={1}
			>
				<Grid item xs={6} md={3}>
					<div
						className={classes.roomsContainer}
						onClick={() => onClickHandler(roomType.Deluxe, 'Deluxe')}
					>
						<img
							className={classes.roomsImg}
							src={bedroom}
							alt="nobu bedroom"
						/>
					</div>
				</Grid>
				<Grid item xs={6} md={3}>
					<div
						className={classes.roomsContainer}
						onClick={() => onClickHandler(roomType.Premium, 'Premium')}
					>
						<img
							className={classes.roomsImg}
							src={waitingRoom}
							alt="nobu waiting room"
						/>
					</div>
				</Grid>
				<Grid item xs={6} md={3}>
					<div
						className={classes.roomsContainer}
						onClick={() => onClickHandler(roomType.Suites, 'Suites')}
					>
						<img
							className={classes.roomsImg}
							src={balcony}
							alt="nobu balcony"
						/>
					</div>
				</Grid>
				<Grid item xs={6} md={3}>
					<div
						className={classes.roomsContainer}
						onClick={() => onClickHandler(roomType.Accessible, 'Accessible')}
					>
						<img
							className={classes.roomsImg}
							src={bedroom}
							alt="nobu bathroom"
						/>
					</div>
				</Grid>
			</Grid>

			<Grid
				container
				alignItems="flex-start"
				className={classes.featuresGrid}
				spacing={3}
				direction={match && 'column-reverse'}
			>
				<Grid item xs={12} sm={5} md={4} fullWidth>
					<div className={classes.features}>
						<h2>Features</h2>
						<List>
							{featured.features.map((feature) => {
								return <ListItem>{feature}</ListItem>;
							})}
						</List>
					</div>
				</Grid>
				<Grid item xs={12} sm={7} md={8} fullWidth>
					<div className="RoomType">
						<h2>{featured.title}</h2>
						<p>{featured.description}</p>
						<p>
							<i>{featured.subDescription}</i>
						</p>
					</div>
				</Grid>
			</Grid>
			<PageHeader
				title="ROOMS & SUITES"
				subtitle="HOTEL IN PALO ALTO, NEAR STANFORD"
			/>
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
			<SlideGrid>
				<IndividualSlide info={slideDetails.exploreOffers} />
			</SlideGrid>
		</div>
	);
};

export default Rooms;
