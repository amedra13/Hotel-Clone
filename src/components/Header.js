import React from 'react';
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
	const matches = useMediaQuery('(min-width:850px)');

	const tabs = (
		<>
			<ThemeProvider theme={theme}>
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
				<Button className="Header__Book" variant="contained" color="primary">
					<Typography color="secondary" variant="caption" noWrap>
						Book
					</Typography>
				</Button>
			</ThemeProvider>
		</>
	);
	return (
		<>
			<AppBar style={{ background: '#fff' }}>
				<Toolbar className="Header">
					<Button>
						<img className="Header__Logo" src={logo} alt="nobu logo" />
					</Button>
					<div className="Header__Tabs">
						{matches && tabs}
						<IconButton>
							<PhoneIcon fontSize="large" />
						</IconButton>
						<IconButton>
							<MenuIcon fontSize="large" />
						</IconButton>
						<Drawer anchor="right">
							<List>
								<ListItem divider>
									<ListItemText>ROOMS & SUITES</ListItemText>
								</ListItem>
								<ListItem divider>
									<ListItemText>OFFERS</ListItemText>
								</ListItem>
								<ListItem divider>
									<ListItemText>DINING</ListItemText>
								</ListItem>
								<ListItem divider>
									<ListItemText>MEETING & EVENTS</ListItemText>
								</ListItem>
								<ListItem divider>
									<ListItemText>COVID-UPDATES</ListItemText>
								</ListItem>
							</List>
						</Drawer>
					</div>
				</Toolbar>
			</AppBar>
			<div className="Header__toolbarMargin"></div>
		</>
	);
};

export default Header;
