import React from 'react';
import { TextareaAutosize } from '@material-ui/core';

const AdditionalInfo = () => {
	return (
		<div>
			<h2>Additional Details and Preferences</h2>
			<TextareaAutosize
				placeholder="Please note your requests or special needs"
				style={{ width: '100%' }}
				rowsMin={10}
			/>
		</div>
	);
};

export default AdditionalInfo;
