import React from 'react';
import MeetingRoom from '../images/Meetings&Events/nobu_meetingRoom.jpg';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import { eventsData } from '../components/individualSlide/slidedata/slideData';
import PageHeader from '../components/pageHeader/PageHeader';
import ImgHeader from '../components/imgHeader/ImgHeader';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const MeetingsAndEvents = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div>
			<ImgHeader imgSource={MeetingRoom} description="Meeting Room" />
			<PageHeader title="MEETINGS & EVENTS" subtitle="NOBU HOTEL PALO ALTO" />
			<SlideGrid>
				<IndividualSlide info={eventsData.meeting} />
				<IndividualSlide info={eventsData.venues} reverse={!match} />
				<IndividualSlide info={eventsData.weddings} />
			</SlideGrid>
		</div>
	);
};

export default MeetingsAndEvents;
