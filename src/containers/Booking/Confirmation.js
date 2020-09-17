import React from 'react';
import { connect } from 'react-redux';

const Confirmation = () => {
	return <div></div>;
};
const mapStateToProps = (state) => {
	return {
		firstName: state.confirmation.firstName,
		lastName: state.confirmation.lastName,
		email: state.confirmation.email,
		phoneNumber: state.confirmation.phoneNumber,
	};
};
export default connect(mapStateToProps)(Confirmation);
