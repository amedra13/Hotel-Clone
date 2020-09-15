import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	summaryContainer: {
		border: '1px solid black',
		borderRadius: '5px',
		marginRight: '50px',
		padding: '20px',
	},
	summaryTab: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	bottomBorder: {
		bottomBorder: '1px solid black',
	},
});

const Summary = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.summaryContainer}>
				<h2>Your Stay</h2>
				<div className={classes.summaryTab}>
					<div>
						<p>Check-In</p>
						<p>After 3:00 PM</p>
					</div>
					<div>
						<p>Check-Out</p>
						<p>Before 12:00 PM</p>
					</div>
				</div>
				<div>
					<div>
						<p>Mon, Sep 14, 2020 - Tue, Sep 15, 2020</p>
						<p>1 adult</p>
					</div>
					<div className={classes.summaryTab}>
						<div>
							<p>Premium Two Double Beds ADA</p>
							<p>
								<i>Free Cancellation</i>
							</p>
						</div>
						<p>$449</p>
					</div>
					<div className={classes.summaryTab}>
						<p>Taxes and Fees</p>
						<p>$73.48</p>
					</div>
					<div>
						<p>Edit | Remove</p>
					</div>
				</div>
				<div className={classes.summaryTab}>
					<h3>Total: </h3>
					<h3>$522.48</h3>
				</div>
				<Button variant="outlined" fullWidth>
					Continue
				</Button>
			</div>
		</>
	);
};

export default Summary;
