import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MeetingRoom from '../images/Meetings&Events/nobu_meetingRoom.jpg';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import './dining.css';

const useStyles = makeStyles({
	meetingSpace: {
		width: '100%',
		height: 'auto',
		maxHeight: '60vh',
		overflow: 'hidden',
	},
	meetingImg: {
		width: '100%',
		objectFit: 'cover',
		transform: 'translateY(-30%)',
	},
	meetingHeader: {
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'QuickSand',
	},
	meetingGrid: {
		width: '98vw',
		margin: '50px auto',
		fontSize: '0.85rem',
		fontFamily: 'QuickSand',
	},
});

const MeetingsAndEvents = () => {
	const classes = useStyles();
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<Header />
			<div className={classes.meetingSpace}>
				<img
					className={classes.meetingImg}
					src={MeetingRoom}
					alt="Meeting Room"
				/>
			</div>
			<div className={classes.meetingHeader}>
				<h5>
					<i>NOBU HOTEL PALO ALTO</i>
				</h5>
				<h1>MEETINGS & EVENTS</h1>
			</div>
			<Grid
				container
				alignItems="flex-start"
				className={classes.meetingGrid}
				spacing={4}
			>
				<IndividualSlide
					info={slideDetails.meeting}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
				/>
				<IndividualSlide
					info={slideDetails.venues}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
					reverse={!match}
				/>
				<IndividualSlide
					info={slideDetails.weddings}
					imgContainerStyle="Dining__ImgContainer"
					imgStyle="Dining__img"
				/>
			</Grid>
			<Footer />
		</div>
	);
};

export default MeetingsAndEvents;
