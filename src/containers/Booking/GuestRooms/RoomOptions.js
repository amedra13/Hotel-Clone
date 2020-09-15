import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import WifiIcon from '@material-ui/icons/Wifi';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';

import './roomOptions.css';

const useStyles = makeStyles({
	root: {
		width: '90%',
		margin: '0 auto',
		marginBottom: '30px',
		border: '1px solid rgba(0,0,0,.274)',
		borderRadius: '5px',
	},
	roomType: {
		padding: '10px',
		'&>*': {
			margin: '6.9px 0',
		},
	},
	roomContainer: {
		display: 'flex',
	},
	featureItem: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '.80rem',
		'&>*': {
			margin: '0',
			padding: '0',
		},
	},
	roomImgContainer: {
		height: '50%',
		overflow: 'hidden',
	},
	roomOptions__Img: {
		width: '100%',
		objectFit: 'contain',
		transform: 'translateY(-20%)',
	},
});

export default function App(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item sm={12} md={4}>
					<div className={classes.roomImgContainer}>
						<img
							className={classes.roomOptions__Img}
							src={props.roomImg}
							alt="Nobu Room"
						/>
					</div>
					<div className="featuerContainer">
						<div className={classes.featureItem}>
							<WifiIcon />
							<p>Free Wifi</p>
						</div>
						<div className={classes.featureItem}>
							<AcUnitIcon />
							<p>Air Conditioning</p>
						</div>
						<div className={classes.featureItem}>
							<SmokeFreeIcon />
							<p>Non-Smoking</p>
						</div>
					</div>
				</Grid>
				<Grid item sm={12} md={8}>
					<div>
						<div className={classes.roomType}>
							<h2>{props.title}</h2>
							<p>{props.dimensions.join(' | ')}</p>
							<p>{props.description}</p>
							<Button variant="outlined">Room Details</Button>
						</div>
						<div className={classes.roomContainer}>
							<div className={classes.roomType}>
								<p>
									<i>Free Cancellation</i>
								</p>
								<p>Guaranteed with Credit Card</p>
								<p>
									Most Flexible Rate. Includes access to WiFi and In-Room Dining
									by Nobu.
								</p>
							</div>
							<div className={classes.roomType} style={{ textAlign: 'right' }}>
								<p>{`$${props.price}`}</p>
								<p>Per Night</p>
								<p>excluding taxes & fees</p>
								<Button variant="outlined" fullWidth>
									BOOK NOW
								</Button>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}