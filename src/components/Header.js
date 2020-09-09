import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/nobuPaloAlto.png';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './header.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#fff',
		},
	},
});

theme.typography.button = {
	fontSize: '.7rem',
	fontFamily: 'Quicksand',
	fontWeight: '600',
	fontStyle: 'italic',
};
theme.typography.caption = {
	fontSize: '1rem',
	'@media (max-width:1100px)': {
		fontSize: '.7rem',
	},
	fontWeight: 550,
};

const Header = () => {
	const [toggleTab, setToggleTab] = useState(false);
	const matches = useMediaQuery('(min-width:850px)');

	const tabs = (
		<>
			<Typography className="Header__tab" variant="button">
				ROOMS & SUITES
			</Typography>
			<Typography className="Header__tab" variant="button">
				OFFERS
			</Typography>
			<Typography className="Header__tab" variant="button">
				DINING
			</Typography>
			<Typography className="Header__tab" variant="button">
				MEETINGS & EVENTS
			</Typography>
			<Typography className="Header__tab" variant="button">
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
					<ListItem divider button>
						<ListItemText>ROOMS & SUITES</ListItemText>
					</ListItem>
					<ListItem divider button>
						<ListItemText>OFFERS</ListItemText>
					</ListItem>
					<ListItem divider button>
						<ListItemText>DINING</ListItemText>
					</ListItem>
					<ListItem divider button>
						<ListItemText>MEETING & EVENTS</ListItemText>
					</ListItem>
					<ListItem divider button>
						<ListItemText>COVID-UPDATES</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</>
	);

	return (
		<>
			<ThemeProvider theme={theme}>
				<AppBar style={{ background: ' rgba(252, 252, 252, 0.589)' }}>
					<Toolbar className="Header">
						<Button>
							<img className="Header__Logo" src={logo} alt="nobu logo" />
						</Button>
						<div className="Header__Tabs">
							{matches && tabs}
							<Button
								className="Header__Book"
								variant="contained"
								color="primary"
							>
								<Typography color="secondary" variant="caption" noWrap>
									Book
								</Typography>
							</Button>
							<IconButton>
								<PhoneIcon fontSize="large" />
							</IconButton>
							{!matches && menuDrawer}
						</div>
					</Toolbar>
				</AppBar>
				<div className="Header__toolbarMargin"></div>
			</ThemeProvider>
		</>
	);
};

export default Header;
