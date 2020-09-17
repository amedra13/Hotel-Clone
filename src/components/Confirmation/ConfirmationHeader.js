import React from 'react';
import './confirmHeader.css';

const ConfirmationHeader = (props) => {
	return (
		<div className="ConfirmationHeader__root">
			<h4>
				Dear {props.firstName} {props.lastName},
			</h4>
			<p>
				Thank you for choosing <i>Nobu Palo Alto</i>. It is our pleasure to
				confirm the following reservation. Please advise us if any changes need
				to be made to this reservation by calling us at 650-995-6402
			</p>
		</div>
	);
};

export default ConfirmationHeader;
