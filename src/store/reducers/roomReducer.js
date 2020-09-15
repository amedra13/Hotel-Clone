import * as actions from '../actions/actions';

const initialState = {
	roomType: 'Zen Premium Suite With 1 King Bed',
	rate: 549,
	price: 0,
};

const bookNow = (state, action) => {
	let newRoom = action.title;
	let newRate = action.price;
	return { ...state, roomType: newRoom, rate: newRate };
};

const roomReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.BOOK_NOW:
			return bookNow(state, action);
		default:
			return state;
	}
};

export default roomReducer;
