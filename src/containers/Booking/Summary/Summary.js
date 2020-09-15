import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	summaryContainer: {
		border: '1px solid rgba(0,0,0,.274)',
		borderRadius: '5px',
		marginRight: '50px',
		padding: '20px',
	},
	summaryTab: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	bottomBorder: {
		borderBottom: '1px solid rgba(0,0,0,.3)',
	},
});

const Summary = (props) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.summaryContainer}>
				<h2>Your Stay</h2>
				<div className={`${classes.summaryTab} ${classes.bottomBorder}`}>
					<div>
						<p>Check-In</p>
						<p>After 3:00 PM</p>
					</div>
					<div>
						<p>Check-Out</p>
						<p>Before 12:00 PM</p>
					</div>
				</div>
				<div className={classes.bottomBorder}>
					<div>
						<p>
							<strong>
								{props.beginDate.toDateString().replaceAll(' ', ', ')} -{' '}
								{props.endDate.toDateString().replaceAll(' ', ', ')}
							</strong>
						</p>
						<p>
							<i>
								{props.adults} Adults, {props.children} Children, {props.nights}{' '}
								nights
							</i>
						</p>
					</div>
					<div className={classes.summaryTab}>
						<div>
							<p>{props.roomSelected}</p>
							<p>
								<i>Free Cancellation</i>
							</p>
						</div>
						<p>${props.roomRate}</p>
					</div>
					<div className={classes.summaryTab}>
						<p>Taxes and Fees</p>
						<p>${(props.roomRate * 0.157).toFixed(2)}</p>
					</div>
					<div>
						<p>Edit | Remove</p>
					</div>
				</div>
				<div className={classes.summaryTab}>
					<h3>Total: </h3>
					<h3>${(props.roomRate * 1.157).toFixed(2)}</h3>
				</div>
				<Button variant="outlined" fullWidth>
					Continue
				</Button>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		adults: state.date.adults,
		children: state.date.children,
		beginDate: state.date.beginDate,
		endDate: state.date.endDate,
		roomSelected: state.room.roomType,
		roomRate: state.room.rate,
		nights: state.date.nights,
	};
};

export default connect(mapStateToProps)(Summary);
