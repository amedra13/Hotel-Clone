import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './circleform.css';

const useStyles = makeStyles({
	description: {
		backgroundColor: '#f8f9fa',
		fontFamily: 'Quicksand',
	},
	button: {
		backgroundColor: 'white',
		'@media (max-width:960px)': {
			marginTop: '20px',
		},
		borderRadius: '3px',
		fontWeight: 600,
	},
	input: {
		color: 'white',
	},
	hideDescription: {
		display: 'none',
	},
	Circle_info: {
		margin: '5px',
		padding: '15px',
	},
});

const CircleForm = () => {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:600px)');

	const circleDescription = (
		<div className={classes.Circle_info}>
			<h1>NOBU INNER CIRCLE</h1>
			<p>
				Join the Nobu Inner Circle and be the first to receive exclusive news,
				updates and offers!
			</p>
		</div>
	);

	return (
		<div className="GridForm">
			<Grid className="CircleForm" container alignItems="stretch" spacing={4}>
				<Grid
					item
					xs={12}
					md={4}
					className={matches ? classes.hideDescription : classes.description}
				>
					{circleDescription}
				</Grid>
				<Grid
					className="CircleForm__FormContainer"
					container
					item
					xs={0}
					md={8}
					alignContent="center"
				>
					{matches && circleDescription}
					<form className="CircleForm__Form">
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									id="firstName"
									label="First Name"
									fullWidth
									variant="filled"
									size="small"
									inputProps={{
										style: { backgroundColor: '#ffffff', color: 'black' },
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									id="lastName"
									label="Last Name"
									fullWidth
									variant="filled"
									size="small"
									inputProps={{
										style: { backgroundColor: '#ffffff', color: 'black' },
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									id="email"
									label="Email"
									fullWidth
									variant="filled"
									size="small"
									inputProps={{
										style: { backgroundColor: '#ffffff', color: 'black' },
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									id="country"
									label="Country"
									fullWidth
									variant="filled"
									size="small"
									inputProps={{
										style: { backgroundColor: '#ffffff', color: 'black' },
									}}
								/>
							</Grid>
						</Grid>
						<Button variant="contained" className={classes.button}>
							Subscribe
						</Button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};

export default CircleForm;
