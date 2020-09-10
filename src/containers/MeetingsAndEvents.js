import React from 'react';
import MeetingRoom from '../images/Meetings&Events/nobu_meetingRoom.jpg';
import SlideGrid from '../hoc/SlideGrid';
import IndividualSlide from '../components/individualSlide/IndividualSlide';
import slideDetails from '../components/slideDetails';
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
				<IndividualSlide info={slideDetails.meeting} />
				<IndividualSlide info={slideDetails.venues} reverse={!match} />
				<IndividualSlide info={slideDetails.weddings} />
			</SlideGrid>
		</div>
	);
};

export default MeetingsAndEvents;
