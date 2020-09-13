import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import './bookReservation.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	Book__GuestContiner: {
		width: '85vw',
		margin: '0 auto',
		border: '2px solid blue',
	},
	Book__Button: {
		height: '50px',
	},
});

const BookReservation = () => {
	const [beginDate, setBeginDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [anchorEl, setAnchorEl] = useState(null);
	const [adults, setAdults] = useState(0);
	const [children, setChildren] = useState(0);

	const classes = useStyles();

	const beginDateChange = (date) => {
		setBeginDate(date);
	};
	const endDateChange = (date) => {
		setEndDate(date);
	};

	const addAdult = () => {
		setAdults((prevAdult) => prevAdult + 1);
	};
	const minusAdult = () => {
		setAdults((prevAdult) => prevAdult - 1);
	};
	const addChild = () => {
		setChildren((prevChildren) => prevChildren + 1);
	};
	const minusChild = () => {
		setChildren((prevChildren) => prevChildren - 1);
	};

	const displayInfo = () => {
		console.log(beginDate);
		console.log(endDate);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
				<Grid
					container
					className={classes.Book__GuestContiner}
					alignItems="center"
					spacing={5}
				>
					<Grid item>
						<div>
							<div className="Book__GuestInfo" onClick={handleClick}>
								<GroupIcon />
								<div className="Book__numberOfPeople">
									<p>Guests</p>
									<p>
										{adults} Adult, {children} Children
									</p>
								</div>
							</div>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem>
									<div className="Book__MenuItem">
										<p>Adults</p>
										<button onClick={addAdult}> +</button>
										<p>{adults}</p>
										<button onClick={minusAdult}>-</button>
									</div>
								</MenuItem>
								<MenuItem>
									<div className="Book__MenuItem">
										<p>Children</p>
										<button onClick={addChild}> +</button>
										<p>{children}</p>
										<button onClick={minusChild}>-</button>
									</div>
								</MenuItem>
							</Menu>
						</div>
					</Grid>
					<Grid item>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="Check-In"
							label="Check-In"
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
							id="Check-Out"
							label="Check-Out"
							value={endDate}
							onChange={endDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</Grid>
					<Grid item>
						<Button
							className={classes.Book__Button}
							onClick={displayInfo}
							variant="outlined"
						>
							Continue
						</Button>
					</Grid>
				</Grid>
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default BookReservation;
