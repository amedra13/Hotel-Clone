import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import covidHeader from '../images/covid/nobu_covidHeader.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	covidHeader: {
		width: '100%',
		height: 'auto',
		maxHeight: '50vh',
		overflow: 'hidden',
	},
	covidImg: {
		width: '100%',
		objectFit: 'contain',
		transform: 'translateY(-15%)',
	},
	covidBody: {
		width: '65vw',
		margin: ' 75px auto',
		fontFamily: 'QuickSand',
	},
	covidListItem: {
		marginLeft: '30px',
		padding: '0',
		fontSize: '.9rem',
	},
	covidIconContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	covidIcon: {
		textAlign: 'center',
		fontSize: '150px',
		margin: '0 30px',
	},
	'@media (max-width:1500px)': {
		covidIcon: {
			fontSize: '125px',
		},
	},
	'@media (max-width:1000px)': {
		covidIcon: {
			fontSize: '75px',
		},
	},
	'@media (max-width:600px)': {
		covidIcon: {
			fontSize: '35px',
		},
	},
});

const CovidUpdates = () => {
	const classes = useStyles();

	return (
		<div>
			<Header />
			<div className={classes.covidHeader}>
				<img className={classes.covidImg} src={covidHeader} alt="YellowTail" />
			</div>
			<div className={classes.covidBody}>
				<h2 style={{ textAlign: 'center' }}>OUR MESSAGE</h2>
				<p>
					At Nobu Hotels the health and safety of our guests and team members is
					paramount. For over 25 years we have proudly served our guests the
					highest quality product in an exceptionally sanitary environment as
					you would only expect with raw fish headlining our menu.
				</p>
				<p>
					We now find ourselves in a new world due to COVID-19. As we move
					forward and begin to welcome our guests and team members back to our
					hotels and restaurants, the journey will be further tailored with
					precautionary hygiene protocols directed by the local health
					organizations and government authorities within each of our
					destinations. You are our family, and we remain resolute in striving
					to continually provide to you our Nobu guest experience through our
					heartfelt kokoro service.
				</p>
				<p>
					We have also ensured that our reservation and cancellation policies
					remain flexible and risk-free during this situation. Should you
					require further assistance please contact
					reservations-paloalto@nobuhotels.com or 1-800-224-6000.
				</p>
				<p>
					For more information about COVID-19, please visit the websites for
					Centers for Disease Control and World Health Organization.
				</p>
				<p>
					We greatly appreciate your desire to travel and look forward to
					welcoming you soon to our hotel.
				</p>
				<p>Safe travels!</p>
			</div>
			<div className={classes.covidBody}>
				<h2 style={{ textAlign: 'center' }}>ENHANCED SAFETY PROTOCOLS</h2>
				<div className={classes.covidIconContainer}>
					<span className={classes.covidIcon}>
						<i class="fas fa-thermometer-three-quarters"></i>
					</span>
					<span className={classes.covidIcon}>
						<i class="fas fa-people-arrows"></i>
					</span>
					<span className={classes.covidIcon}>
						<i class="fas fa-head-side-mask"></i>
					</span>
					<span className={classes.covidIcon}>
						<i class="fas fa-hands-wash"></i>
					</span>
					<span className={classes.covidIcon}>
						<i class="fas fa-pump-soap"></i>
					</span>
				</div>
				<p>
					At Nobu Palo Alto we have implemented the following precautionary
					measures, in accordance with the Centers for Disease Control (CDC) and
					Santa Clara County:
				</p>
				<List>
					<ListItem className={classes.covidListItem}>
						Reservations will require full contact information and credit card
						payment prior to arrival for duration of stay to expedite guest
						registration.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						All room, restaurant charges and gratuities are required to be paid
						via credit card to eliminate cash handling.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						All persons entering the Hotel will have their temperature taken by
						thermal screening.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Guest rooms are left vacant for a minimum of 48 hours following
						guest check-out.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Guest rooms feature independent HVAC units with no forced
						circulation from other rooms or public space and air filters are
						changed after each stay.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						UV Light Germicidal Room Sanitizers will be used in all guest rooms
						after check-out as well as in all public areas.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Guest room carpets and window shades are cleaned with specific
						disinfectant sprays.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						All bedding, including pillow protectors and mattress protectors are
						laundered following check-out.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Turndown services have been temporarily suspended to reduce contact.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Daily in-room cleaning is available by request.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Guest bedding and towels will be changed upon request to reduce
						amount of entry into a guest room.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Mini-Bar items have been removed and a personalized bar is available
						to stock your bar according to your request, with all items
						sanitized.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Guest personal laundry and dry cleaning has been temporarily
						suspended.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Valet parking and house car services have been temporarily suspended
						to reduce personal contact. For guests self-driving a list of nearby
						garages will be provided by the hotel.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						All rooms have Alexa for voice-commands for lighting and shades.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Elevator access is limited to one person at a time unless traveling
						with a respective party.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Hotel entry and exit are delineated for a safer flow and movement of
						guests.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Ability to use your personal smart device to operate and navigate
						the TV, avoiding use of the in-room TV remote control
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						In-room dining menu’s displayed on your TV and delivered to your
						door only in order to avoid contact.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Restaurant dining capacity has been reduced to facilitate personal
						distancing.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Restaurant menus are one-time use only.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Restaurant menus are also available via your personal smart device
						using a QR code.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						All staff will wear masks and gloves at all times.
					</ListItem>
					<ListItem className={classes.covidListItem} disableGutters>
						Masks and gloves will be made available to guests.
					</ListItem>
				</List>
			</div>
			<Footer />
		</div>
	);
};

export default CovidUpdates;
