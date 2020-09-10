import React from 'react';
import MeetingRoom from '../images/Meetings&Events/nobu_meetingRoom.jpg';
import Grid from '@material-ui/core/Grid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import PageHeader from '../components/pageHeader/PageHeader';
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
			<div className={classes.meetingSpace}>
				<img
					className={classes.meetingImg}
					src={MeetingRoom}
					alt="Meeting Room"
				/>
			</div>
			<PageHeader title="MEETINGS & EVENTS" subtitle="NOBU HOTEL PALO ALTO" />
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
		</div>
	);
};

export default MeetingsAndEvents;
