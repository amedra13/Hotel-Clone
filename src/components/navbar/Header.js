import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/nobuPaloAlto.png';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './header.css';

const useStyles = makeStyles({
	Button: {
		backgroundColor: 'black',
		color: 'white',
		height: '35px',
		width: ' 80px',
		fontWeight: 700,
		borderRadius: '3px;',
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,.8)',
		},
	},
});

const Header = () => {
	const [toggleTab, setToggleTab] = useState(false);
	const matches = useMediaQuery('(min-width:850px)');
	const classes = useStyles();

	const tabs = (
		<>
			<Typography
				className="Header__tab"
				variant="button"
				component={Link}
				to="/rooms"
			>
				ROOMS & SUITES
			</Typography>
			<Typography
				className="Header__tab"
				variant="button"
				component={Link}
				to="/offers"
			>
				OFFERS
			</Typography>
			<Typography
				className="Header__tab"
				variant="button"
				component={Link}
				to="/dining"
			>
				DINING
			</Typography>
			<Typography
				className="Header__tab"
				variant="button"
				component={Link}
				to="/events"
			>
				MEETINGS & EVENTS
			</Typography>
			<Typography
				className="Header__tab"
				variant="button"
				component={Link}
				to="/covid"
			>
				COVID-UPDATES
			</Typography>
		</>
	);

	const menuDrawer = (
		<>
			<IconButton onClick={() => setToggleTab(!toggleTab)}>
				<MenuIcon fontSize="large" />
			</IconButton>
			<Drawer
				variant="temporary"
				anchor="right"
				open={toggleTab}
				onBackdropClick={() => setToggleTab(!toggleTab)}
			>
				<List>
					<ListItem
						divider
						button
						component={Link}
						to="/rooms"
						onClick={() => setToggleTab(false)}
					>
						<ListItemText>ROOMS & SUITES</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/offers"
						onClick={() => setToggleTab(false)}
					>
						<ListItemText>OFFERS</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/dining"
						onClick={() => setToggleTab(false)}
					>
						<ListItemText>DINING</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/events"
						onClick={() => setToggleTab(false)}
					>
						<ListItemText>MEETING & EVENTS</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/covid"
						onClick={() => setToggleTab(false)}
					>
						<ListItemText>COVID-UPDATES</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/"
						onClick={() => setToggleTab(false)}
					>
						<ListItemText>HOME</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</>
	);

	return (
		<>
			<AppBar style={{ background: ' rgba(252, 252, 252, 0.589)' }}>
				<Toolbar className="Header">
					<Button component={Link} to="/">
						<img className="Header__Logo" src={logo} alt="nobu logo" />
					</Button>
					<div className="Header__Tabs">
						{matches && tabs}
						<Button className={classes.Button} variant="contained">
							Book
						</Button>
						{!matches && menuDrawer}
					</div>
				</Toolbar>
			</AppBar>
			<div className="Header__toolbarMargin"></div>
		</>
	);
};

export default Header;
