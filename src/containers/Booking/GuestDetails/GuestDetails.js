import React from 'react';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	guestStepper: {
		width: '90%',
		margin: '0 auto',
		paddingLeft: '0',
		paddingRight: '0',
	},
});

const GuestDetails = (props) => {
	const classes = useStyles();

	return (
		<div>
			<Stepper className={classes.guestStepper} activeStep={props.activeStep}>
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
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		activeStep: state.room.activeStep,
	};
};

export default connect(mapStateToProps)(GuestDetails);
