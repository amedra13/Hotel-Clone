import React from 'react';
import DatePicker from './DatePicker/DatePicker';
import RoomOptions from './GuestRooms/RoomOptions';
import BookingHeader from './bookHeader/BookingHeader';
import Summary from './Summary/Summary';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import RoomDetails from '../../components/Booking/RoomOptionDetails';

import './bookReservation.css';

const BookReservation = () => {
	const match = useMediaQuery('(max-width:960px)');

	return (
		<div className="Book">
			<BookingHeader />
			<Grid container spacing={1}>
				<Grid item sm={12} md={8}>
					<DatePicker />
					{RoomDetails.map((room) => {
						return (
							<RoomOptions
								key={room.title}
								title={room.title}
								dimensions={room.dimensions}
								description={room.description}
								price={room.rate}
								roomImg={room.roomImg}
							/>
						);
					})}
				</Grid>
				<Grid item md={4}>
					{!match && <Summary nextPage="/guestDetails" />}
				</Grid>
			</Grid>
		</div>
	);
};

export default BookReservation;
