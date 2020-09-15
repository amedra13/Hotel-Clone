import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
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

const DatePicker = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [activeStep, setActiveStep] = useState(0);

	const classes = useStyles();

	const displayInfo = () => {
		console.log(props.beginDate.toDateString().replaceAll(' ', ', '));
		console.log(props.endDate.toDateString().replaceAll(' ', ', '));
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
										{props.adults} Adult, {props.children} Children
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
										<button onClick={props.onAddAdult}> +</button>
										<p>{props.adults}</p>
										<button onClick={props.onSubAdult}>-</button>
									</div>
								</MenuItem>
								<MenuItem>
									<div className="Date__MenuItem">
										<p>Children</p>
										<button onClick={props.onAddChild}> +</button>
										<p>{props.children}</p>
										<button onClick={props.onSubChild}>-</button>
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
							value={props.beginDate}
							onChange={props.onBeginDate}
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
							minDate={props.beginDate}
							minDateMessage={null}
							value={props.endDate}
							onChange={props.onEndDate}
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

const mapStateToProps = (state) => {
	return {
		adults: state.adults,
		children: state.children,
		beginDate: state.beginDate,
		endDate: state.endDate,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddAdult: () => dispatch(actions.addAdult()),
		onSubAdult: () => dispatch(actions.subAdult()),
		onAddChild: () => dispatch(actions.addChild()),
		onSubChild: () => dispatch(actions.subChild()),
		onBeginDate: (e) => dispatch(actions.beginDateChange(e)),
		onEndDate: (e) => dispatch(actions.endDateChange(e)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
