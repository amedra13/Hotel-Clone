import React from 'react';
import Grid from '@material-ui/core/Grid';
import './confirmDetails.css';

const ConfirmationDetails = (props) => {
	return (
		<Grid container alignItems="stretch" style={{ margin: '30px 0' }} fullWidth>
			<Grid item xs={12} sm={6}>
				<div className="confirm__gridItem">
					<div className="confirm__gridTab">
						<h2>RESERVATION DETAILS</h2>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Confirmation Number</strong>
						</p>
						<p>{Math.random().toString(36).substring(3).toUpperCase()}</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Guest Name</strong>
						</p>
						<p>
							{props.firstName} {props.lastName}
						</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Arrival Date</strong>
						</p>
						<p>{props.beginDate.toDateString().replaceAll(' ', ', ')}</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Departure Date</strong>
						</p>
						<p>{props.endDate.toDateString().replaceAll(' ', ', ')}</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Room Type</strong>
						</p>
						<p>{props.roomType}</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Nightly Rate</strong>
						</p>
						<p>${props.nightlyRate}</p>
					</div>
					<div className="confirm__gridTab">
						The above rate(s) may not reflect all possible fees, additional
						charges, or taxes associated with the reservation. For clarification
						regarding this charges, please contact our reservations department
					</div>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className="confirm__gridItem">
					<div className="confirm__gridTab">
						<h2>POLICIES</h2>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Check-In Time</strong>
						</p>
						<p>3:00PM</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Check-Out Time</strong>
						</p>
						<p>12:00PM</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Room Tax</strong>
						</p>
						<p>10.2% State Tax + 5.5% City Tax</p>
					</div>
					<div className="confirm__gridTab">
						<p>
							<strong>Cancelation Policy</strong>
						</p>
						<p>
							Cancellations must be recieved by 3pm the previous day prior to
							arrival to avoid the first nights Room and Tax
						</p>
					</div>
					<div className="confirm__gridTab">
						We provide our guest with a completely smoke-free environment
					</div>
				</div>
			</Grid>
		</Grid>
	);
};

export default ConfirmationDetails;
