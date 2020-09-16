import React from 'react';
import { connect } from 'react-redux';
import Summary from '../Summary/Summary';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	guestRoot: {
		fontFamily: 'QuickSand',
	},
	guestStepper: {
		margin: '0',
		paddingTop: '0',
		paddingLeft: '0',
	},
	guestContainer: {
		width: '90vw',
		margin: '100px auto',
	},
	informationContainer: {
		border: '1px solid rgba(0,0,0,.274)',
		padding: '0 20px 20px 20px',
	},
	blackBottom: {
		borderBottom: '1px solid rgba(0,0,0,.274)',
		paddingBottom: '20px',
	},
});

const GuestDetails = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.guestRoot}>
			<Grid container className={classes.guestContainer} spacing={3}>
				<Grid item xs={12} sm={8}>
					<div>
						<h1>GUEST DETAILS</h1>
						<Stepper
							className={classes.guestStepper}
							activeStep={props.activeStep}
						>
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
					<div className={classes.informationContainer}>
						<div className={classes.blackBottom}>
							<h2>Guest Information</h2>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										id="firstName"
										label="First Name"
										fullWidth
										multiline
										variant="outlined"
										size="small"
										inputProps={{
											style: { backgroundColor: '#ffffff', color: 'black' },
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="lastName"
										label="Last Name"
										fullWidth
										multiline
										variant="outlined"
										size="small"
										inputProps={{
											style: { backgroundColor: '#ffffff', color: 'black' },
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="phone"
										label="Phone"
										fullWidth
										multiline
										variant="outlined"
										size="small"
										inputProps={{
											style: { backgroundColor: '#ffffff', color: 'black' },
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="email"
										label="Email"
										fullWidth
										multiline
										variant="outlined"
										size="small"
										inputProps={{
											style: { backgroundColor: '#ffffff', color: 'black' },
										}}
									/>
								</Grid>
							</Grid>
						</div>
						<div className={classes.blackBottom}>
							<h2>Additional Details and Preferences</h2>
							<TextareaAutosize
								placeholder="Please note your requests or special needs"
								style={{ width: '100%' }}
								rowsMin={10}
							/>
						</div>
						<div>Payment Information</div>
						<div>Policies</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Summary />
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		activeStep: state.room.activeStep,
	};
};

export default connect(mapStateToProps)(GuestDetails);
