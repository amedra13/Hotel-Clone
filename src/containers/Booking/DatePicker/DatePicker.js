import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import './datepicker.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	Date__GuestContiner: {
		width: '90%',
		margin: ' 0 auto',
		border: '1px solid rgba(0,0,0,.274)',
		borderRadius: '5px',
	},
	Date__Button: {
		height: '50px',
	},
	Stepper: {
		width: '90%',
		margin: '0 auto',
		paddingLeft: '0',
		paddingRight: '0',
	},
});

const DatePicker = () => {
	const [beginDate, setBeginDate] = useState(new Date());
	const [endDate, setEndDate] = useState(beginDate);

	const [anchorEl, setAnchorEl] = useState(null);
	const [adults, setAdults] = useState(0);
	const [children, setChildren] = useState(0);

	const [activeStep, setActiveStep] = useState(0);

	const classes = useStyles();

	const beginDateChange = (date) => {
		setBeginDate(date);
	};
	const endDateChange = (date) => {
		setEndDate(date);
	};

	const addAdult = () => {
		if (adults === 4) return;
		setAdults((prevAdult) => prevAdult + 1);
	};
	const minusAdult = () => {
		if (adults === 0) return;
		setAdults((prevAdult) => prevAdult - 1);
	};
	const addChild = () => {
		if (children === 4) return;
		setChildren((prevChildren) => prevChildren + 1);
	};
	const minusChild = () => {
		if (children === 0) return;
		setChildren((prevChildren) => prevChildren - 1);
	};

	const displayInfo = () => {
		console.log(beginDate.getDate());
		console.log(endDate.getDate());
		setActiveStep(1);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className="Date">
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid
					container
					className={classes.Date__GuestContiner}
					alignItems="center"
					spacing={5}
				>
					<Grid item>
						<div>
							<div className="Date__GuestInfo" onClick={handleClick}>
								<GroupIcon />
								<div className="Date__numberOfPeople">
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
									<div className="Date__MenuItem">
										<p>Adults</p>
										<button onClick={addAdult}> +</button>
										<p>{adults}</p>
										<button onClick={minusAdult}>-</button>
									</div>
								</MenuItem>
								<MenuItem>
									<div className="Date__MenuItem">
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
							disablePast
							autoOk
							value={beginDate}
							onChange={beginDateChange}
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
							disablePast
							autoOk
							minDate={beginDate}
							minDateMessage={null}
							value={endDate}
							onChange={endDateChange}
						/>
					</Grid>
					<Grid item>
						<Button
							className={classes.Date__Button}
							onClick={displayInfo}
							variant="outlined"
						>
							Continue
						</Button>
					</Grid>
				</Grid>
				<Stepper className={classes.Stepper} activeStep={activeStep}>
					<Step>
						<StepLabel>Rooms</StepLabel>
					</Step>
					<Step>
						<StepLabel>Guest Details</StepLabel>
					</Step>
					<Step>
						<StepLabel>Review</StepLabel>
					</Step>
					<Step>
						<StepLabel>Confirmation</StepLabel>
					</Step>
				</Stepper>
			</MuiPickersUtilsProvider>
		</div>
	);
};

export default DatePicker;
