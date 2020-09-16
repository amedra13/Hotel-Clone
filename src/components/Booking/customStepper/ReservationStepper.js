import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	Stepper: {
		paddingLeft: '0',
		paddingRight: '0',
	},
});

const ReservationStepper = (props) => {
	const classes = useStyles();
	return (
		<div>
			<Stepper className={classes.Stepper} activeStep={props.activeStep}>
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

export default ReservationStepper;
