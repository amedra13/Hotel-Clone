import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { TextareaAutosize } from '@material-ui/core';

const AdditionalInfo = (props) => {
	return (
		<div>
			<h2>Additional Details and Preferences</h2>
			<TextareaAutosize
				placeholder="Please note your requests or special needs"
				style={{ width: '100%' }}
				rowsMin={10}
				value={props.additionalDetails}
				onInput={(e) => props.changeDetails(e.target.value)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		additionalDetails: state.confirmation.additionalDetails,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		changeDetails: (newDetails) => dispatch(actions.addDetails(newDetails)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);
