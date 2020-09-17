import * as actions from '../actions/actions';

const initialState = {
	firstName: 'andres',
	lastName: 'Medrano',
	phoneNumber: '',
	email: '',
	additionDetails: '',
};

const roomReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_FIRSTNAME:
			return {
				...state,
				firstName: action.firstName,
			};
		case actions.ADD_LASTNAME:
			return {
				...state,
				lastName: action.lastName,
			};
		case actions.ADD_EMAIL:
			return {
				...state,
				email: action.email,
			};
		case actions.ADD_PHONENUMBER:
			return {
				...state,
				phoneNumber: action.phoneNumber,
			};
		case actions.ADD_DETAILS:
			return {
				...state,
				additionDetails: action.additionDetails,
			};
		default:
			return state;
	}
};

export default roomReducer;
