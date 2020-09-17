import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const ContactInfo = (props) => {
	return (
		<div>
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
						value={props.firstName}
						onInput={(e) => props.changeFirstName(e.target.value)}
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
						value={props.lastName}
						onInput={(e) => props.changeLastName(e.target.value)}
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
						value={props.phoneNumber}
						onInput={(e) => props.changePhone(e.target.value)}
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
						value={props.email}
						onInput={(e) => props.changeEmail(e.target.value)}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		firstName: state.confirmation.firstName,
		lastName: state.confirmation.lastName,
		email: state.confirmation.email,
		phoneNumber: state.confirmation.phoneNumber,
		activeStep: state.room.activeStep,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		changeFirstName: (newName) => dispatch(actions.addFirstName(newName)),
		changeLastName: (newName) => dispatch(actions.addLastName(newName)),
		changeEmail: (newEmail) => dispatch(actions.addEmail(newEmail)),
		changePhone: (newPhone) => dispatch(actions.addPhoneNumber(newPhone)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
