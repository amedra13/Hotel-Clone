import React, { useState } from 'react';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import './bookReservation.css';

const BookReservation = () => {
	const [beginDate, setBeginDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const beginDateChange = (date) => {
		setBeginDate(date);
	};
	const endDateChange = (date) => {
		setEndDate(date);
	};

	return (
		<div className="Book">
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className="Book__ImgHeader">
					<div className="Book__ContactContainer">
						<h2>NOBU HOTEL PALO ALTO</h2>
						<div className="Book__ContactInfo">
							<EmojiTransportationIcon />
							<p>
								180 Hamilton Avenue, Palo Alto, California, United States, 94301
							</p>
						</div>
						<div className="Book__ContactInfo">
							<PhoneIcon />
							<p>1-650-6663311</p>
						</div>
					</div>
				</div>
				<div className="Book_Announcement">
					The Hotel will be re opening on July 1st 2020.
				</div>
				<Grid container>
					<Grid item>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Date picker inline"
							value={beginDate}
							onChange={beginDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</Grid>
					<Grid item>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Date picker inline"
							value={endDate}
							onChange={endDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</Grid>
				</Grid>
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default BookReservation;
