import * as actions from '../actions/actions';

const initialState = {
	adults: 5,
};

const addAdult = (state) => {
	const newAdults = state.adults + 1;
	return { adults: newAdults };
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_ADULT:
			return addAdult(state);
		default:
			return state;
	}
};

export default reducer;
