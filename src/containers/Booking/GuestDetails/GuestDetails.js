import React from 'react';
import { connect } from 'react-redux';
import Summary from '../Summary/Summary';
import Policies from '../../../components/Booking/policies/Policies';
import Payment from '../../../components/Booking/payment/Payment';
import AdditionalInfo from '../../../components/Booking/additionalInfo/AdditionalInfo';
import ContactInfo from '../../../components/Booking/contactInfo/ContactInfo';
import ReservationStepper from '../../../components/Booking/customStepper/ReservationStepper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	guestRoot: {
		fontFamily: 'QuickSand',
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
				<Grid item sm={12} md={8}>
					<div>
						<h1 style={{ marginBottom: '0' }}>GUEST DETAILS</h1>
						<ReservationStepper activeStep={props.activeStep} />
					</div>
					<div className={classes.informationContainer}>
						<div className={classes.blackBottom}>
							<ContactInfo />
						</div>
						<div className={classes.blackBottom}>
							<AdditionalInfo />
						</div>
						<Payment />
					</div>

					<Policies />
				</Grid>
				<Grid item sm={12} md={4}>
					<div style={{ marginRight: '-50px' }}>
						<Summary />
					</div>
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
