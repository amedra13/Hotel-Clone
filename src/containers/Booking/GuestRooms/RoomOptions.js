import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WifiIcon from '@material-ui/icons/Wifi';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import Room from '../../../images/Rooms/nobu_bedroom.jpg';

import './roomOptions.css';

const useStyles = makeStyles({
	root: {
		width: '90%',
		margin: '0 auto',
		border: '1px solid black',
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

export default function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item sm={12} md={4}>
					<div className={classes.roomImgContainer}>
						<img
							className={classes.roomOptions__Img}
							src={Room}
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
							<h2>Deluxe Double Queen Room</h2>
							<p>Sleeps 4/2 Queen 320 ft²</p>
							<p>Deluxe Double Queen Room (320 f²/30 m²)</p>
							<button>Room details</button>
						</div>
						<div className={classes.roomContainer}>
							<div className={classes.roomType}>
								<button>Free cancellation</button>
								<p>Guaranteed with Credit Card</p>
								<p>
									Most Flexible Rate. Includes access to WiFi and In-Room Dining
									by Nobu.
								</p>
							</div>
							<div className={classes.roomType}>
								<p>$449</p>
								<p>Per Night</p>
								<p>excluding taxes & fees</p>
								<button>BOOK NOW</button>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
