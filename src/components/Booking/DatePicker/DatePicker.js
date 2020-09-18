import React from 'react';
import { connect } from 'react-redux';
import ReservationStepper from '../customStepper/ReservationStepper';
import Occupancy from '../occupancy/Occupancy';
import * as actions from '../../../store/actions/index';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	Date__GuestContiner: {
		width: '90%',
		margin: ' 0 auto',
		border: '1px solid rgba(0,0,0,.274)',
		borderRadius: '5px',
	},
});

const DatePicker = (props) => {
	const classes = useStyles();

	return (
		<div>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid
					container
					className={classes.Date__GuestContiner}
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={4}>
						<Occupancy />
					</Grid>
					<Grid item xs={4}>
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
					<Grid item xs={4}>
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
				</Grid>
				<div style={{ width: '90%', margin: '0 auto' }}>
					<ReservationStepper activeStep={props.activeStep} />
				</div>
			</MuiPickersUtilsProvider>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		beginDate: state.date.beginDate,
		endDate: state.date.endDate,
		activeStep: state.room.activeStep,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onBeginDate: (e) => dispatch(actions.beginDateChange(e)),
		onEndDate: (e) => dispatch(actions.endDateChange(e)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
