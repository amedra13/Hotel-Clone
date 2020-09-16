import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const ContactInfo = () => {
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
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default ContactInfo;
