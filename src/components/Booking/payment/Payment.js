import React from 'react';
import PaymentIcon from '@material-ui/icons/Payment';
import Grid from '@material-ui/core/Grid';
import { InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	inputRoot: {
		width: '75%',
	},
	input: {
		margin: '10px  5px',
	},
});

const Payment = () => {
	const classes = useStyles();
	return (
		<div className={classes.inputRoot}>
			<h1>Payment Information</h1>
			<TextField
				id="creditCard"
				label="Credit Card"
				variant="outlined"
				fullWidth
				disabled
				className={classes.input}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<PaymentIcon />
						</InputAdornment>
					),
				}}
			/>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<TextField
						id="expirattionDate"
						label="Expiration Date"
						variant="outlined"
						fullWidth
						disabled
						className={classes.input}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						id="cvv"
						label="CVV"
						variant="outlined"
						fullWidth
						disabled
						className={classes.input}
					/>
				</Grid>
			</Grid>
			<TextField
				id="nameOnCard"
				label="Name On Credit Card"
				variant="outlined"
				fullWidth
				disabled
				className={classes.input}
			/>
		</div>
	);
};

export default Payment;
