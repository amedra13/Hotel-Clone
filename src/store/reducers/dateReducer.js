import * as actions from '../actions/actions';

const initialState = {
	adults: 2,
	children: 1,
	beginDate: new Date(),
	endDate: new Date(),
	nights: 3,
};

const addAdult = (state) => {
	if (state.adults === 4) return state;
	const newAdults = state.adults + 1;
	return { ...state, adults: newAdults };
};
const subAdult = (state) => {
	if (state.adults === 1) return state;
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

const beginDate = (state, newDate) => {
	return { ...state, beginDate: newDate };
};
const endDate = (state, newDate) => {
	return { ...state, endDate: newDate };
};

const dateReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_ADULT:
			return addAdult(state);
		case actions.SUB_ADULT:
			return subAdult(state);
		case actions.ADD_CHILD:
			return addChild(state);
		case actions.SUB_CHILD:
			return subChild(state);
		case actions.BEGINDATE_CHANGE:
			return beginDate(state, action.newDate);
		case actions.ENDDATE_CHANGE:
			return endDate(state, action.newDate);
		default:
			return state;
	}
};

export default dateReducer;
