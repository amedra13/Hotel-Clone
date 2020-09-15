import * as actions from '../actions/actions';

const initialState = {
	adults: 2,
	children: 1,
};

const addAdult = (state) => {
	if (state.adults === 4) return state;
	const newAdults = state.adults + 1;
	return { ...state, adults: newAdults };
};
const subAdult = (state) => {
	if (state.adults === 0) return state;
	const newAdults = state.adults - 1;
	return { ...state, adults: newAdults };
};
const addChild = (state) => {
	if (state.children === 4) return state;
	const newChildren = state.children + 1;
	return { ...state, children: newChildren };
};
const subChild = (state) => {
	if (state.children === 0) return state;
	const newChildren = state.children - 1;
	return { ...state, children: newChildren };
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_ADULT:
			return addAdult(state);
		case actions.SUB_ADULT:
			return subAdult(state);
		case actions.ADD_CHILD:
			return addChild(state);
		case actions.SUB_CHILD:
			return subChild(state);
		default:
			return state;
	}
};

export default reducer;
