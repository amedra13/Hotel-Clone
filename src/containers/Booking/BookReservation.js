import React from 'react';
import DatePicker from './DatePicker/DatePicker';
import RoomOptions from './GuestRooms/RoomOptions';
import BookingHeader from './bookHeader/BookingHeader';
import Summary from './Summary/Summary';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './bookReservation.css';

const BookReservation = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div className="Book">
			<BookingHeader />
			<Grid container spacing={2}>
				<Grid item sm={12} md={8}>
					<DatePicker />
					<RoomOptions />
				</Grid>
				<Grid item sm={0} md={4}>
					{!match && <Summary />}
				</Grid>
			</Grid>
		</div>
	);
};

export default BookReservation;
