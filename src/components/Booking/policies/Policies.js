import React from 'react';
import './Policy.css';

const Policies = (props) => {
	return (
		<div className="Policies__root">
			<h2>Policies</h2>
			<div className="Policies__checkIn">
				<div className="Policies__tab">
					<p>Check-In</p>
					<p>After 3:00 PM</p>
				</div>
				<div className="Policies__tab">
					<p>Check-Out</p>
					<p>Before 12:00 PM</p>
				</div>
			</div>
			<h4>ROOM: {props.roomType} </h4>
			<div className="Policies__tab">
				<p>Guarantee Policy</p>
				<p>GUARANTEE CREDIT CARD 1NT</p>
			</div>
			<div className="Policies__tab">
				<p>Cancel Policy</p>
				<p>
					Cancel 24 hours prior to arrival to avoid a penalty of 1 nights room{' '}
					{props.totalPrice}
				</p>
			</div>
			<div className="Policies__tab">
				<p>Additional Policy</p>
				<p>
					Smoking is not permitted in the hotel. A $500 fee will be charged for
					each day the room is unavailable for sale due to violation.
				</p>
			</div>
		</div>
	);
};

export default Policies;
