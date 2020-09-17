import * as actions from '../actions/actions';

const initialState = {
	roomType: null,
	rate: null,
	nightlyRate: [],
	activeStep: 0,
	roomSummary: true,
	reDirect: true,
};

const bookNow = (state, action) => {
	return {
		...state,
		roomType: action.title,
		rate: action.price,
		roomSummary: false,
		reDirect: false,
	};
};

const remove = (state) => {
	return {
		...state,
		roomType: null,
		rate: null,
		activeStep: 0,
		roomSummary: true,
		reDirect: true,
	};
};

const nextStep = (state) => {
	const nextLevel = state.activeStep + 1;
	return {
		...state,
		activeStep: nextLevel,
	};
};

const roomReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.BOOK_NOW:
			return bookNow(state, action);
		case actions.REMOVE:
			return remove(state);
		case actions.NEXT_STEP:
			return nextStep(state);
		default:
			return state;
	}
};

export default roomReducer;
