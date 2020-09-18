import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import ReservationStepper from '../../components/Booking/customStepper/ReservationStepper';
import ConfirmationHeader from '../../components/Confirmation/ConfirmationHeader';
import ConfirmationDetails from '../../components/Confirmation/ConfirmationDetails';
import Button from '@material-ui/core/Button';

const Confirmation = (props) => {
	const scrollAndRestart = () => {
		window.scrollTo({ top: 0, behavior: 'auto' });
		props.onRemove();
	};
	return (
		<div style={{ width: '90vw', margin: '0 auto', fontFamily: 'QuickSand' }}>
			<ReservationStepper activeStep={props.activeStep} />
			<ConfirmationHeader
				firstName={props.firstName}
				lastName={props.lastName}
			/>
			<ConfirmationDetails
				firstName={props.firstName}
				lastName={props.lastName}
				beginDate={props.beginDate}
				endDate={props.endDate}
				roomType={props.roomType}
				nightlyRate={props.nightlyRate}
			/>
			<Button
				variant="outlined"
				component={Link}
				to="/book"
				style={{ marginBottom: '20px' }}
				onClick={scrollAndRestart}
				fullWidth
			>
				<p>
					<strong>
						<i>New Reservation</i>
					</strong>
				</p>
			</Button>
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
		roomType: state.room.roomType,
		nightlyRate: state.room.rate,
		beginDate: state.date.beginDate,
		endDate: state.date.endDate,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onRemove: () => dispatch(actions.remove()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
