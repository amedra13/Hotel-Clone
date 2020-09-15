import kingRoom from '../../images/Rooms/nobu_bedroom.jpg';
import doubleRoom from '../../images/Rooms/nobu_bathroom.jpg';
import suiteRoom from '../../images/MainPage/nobu_balcony.jpg';

const RoomOptions = [
	{
		title: 'Premium King',
		dimensions: ['Sleeps 2', '1 King', ' 20 ft²'],
		description: 'Premium King Room (320 f²/30 m²)',
		rate: 449,
		roomImg: `${kingRoom}`,
	},
	{
		title: 'Premium Double Queen',
		dimensions: ['Sleeps 4', '2 Queen', '320 ft²'],
		description: 'Premium Double Queen Room (320 f²/30 m²)',
		rate: 499,
		roomImg: `${doubleRoom}`,
	},
	{
		title: 'Zen Premium Suite With 1 King Bed',
		dimensions: ['Sleeps 3', '1 King', '470 ft²'],
		description: 'Zen Premium Suite with 1 King bed. 470sqft',
		rate: 549,
		roomImg: `${suiteRoom}`,
	},
];

export default RoomOptions;
