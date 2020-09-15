import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	footer: {
		backgroundColor: '#f8f9fa',
		paddingLeft: '18px',
		marginTop: '0px',
	},
	listItem: {
		margin: 0,
		color: 'black',
		borderLeft: '1px solid #adb5bd',
		fontFamily: 'QuickSand',
		fontSize: '.8rem',
		'&:first-child': {
			fontWeight: 700,
		},
	},
});

const Footer = () => {
	const classes = useStyles();

	const compliance = ['ADA Compliance', 'Hotel Updates'];
	const ourStory = [
		'Our Hotels',
		'Our Story',
		'About Nobu Hospitality',
		'Leadership',
		'Residences',
	];
	const events = [
		'Meeting & Events',
		'Group Bookings',
		'Request for Proposal',
		'Nobu Restuarants',
	];
	const aboutUs = [
		'Media & Press',
		'Nobu Inner Circle',
		'Contact Us',
		'Privacy Policy',
		'Careers',
	];

	return (
		<Grid className={classes.footer} container spacing={3}>
			<Grid item xs={6} sm={3}>
				<List disablePadding className={classes.list}>
					{compliance.map((tab) => {
						return (
							<ListItem key={tab} className={classes.listItem}>
								<ListItemText primary={tab} disableTypography />
							</ListItem>
						);
					})}
				</List>
			</Grid>
			<Grid item xs={6} sm={3}>
				<List disablePadding className={classes.list}>
					{ourStory.map((tab) => {
						return (
							<ListItem key={tab} className={classes.listItem}>
								<ListItemText primary={tab} disableTypography />
							</ListItem>
						);
					})}
				</List>
			</Grid>
			<Grid item xs={6} sm={3}>
				<List disablePadding>
					{events.map((tab) => {
						return (
							<ListItem key={tab} className={classes.listItem}>
								<ListItemText primary={tab} disableTypography />
							</ListItem>
						);
					})}
				</List>
			</Grid>
			<Grid item xs={6} sm={3}>
				<List disablePadding>
					{aboutUs.map((tab) => {
						return (
							<ListItem key={tab} className={classes.listItem}>
								<ListItemText primary={tab} disableTypography />
							</ListItem>
						);
					})}
				</List>
			</Grid>
		</Grid>
	);
};

export default Footer;
