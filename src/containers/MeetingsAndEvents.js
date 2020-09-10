import React from 'react';
import MeetingRoom from '../images/Meetings&Events/nobu_meetingRoom.jpg';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/IndividualSlide';
import slideDetails from '../components/slideDetails';
import PageHeader from '../components/pageHeader/PageHeader';
import ImgHeader from '../components/imgHeader/ImgHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './dining.css';

const MeetingsAndEvents = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<ImgHeader imgSource={MeetingRoom} description="Meeting Room" />
			<PageHeader title="MEETINGS & EVENTS" subtitle="NOBU HOTEL PALO ALTO" />
			<SlideGrid>
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
			</SlideGrid>
		</div>
	);
};

export default MeetingsAndEvents;
