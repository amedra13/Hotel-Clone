import * as actionTypes from './actions';

export const bookNow = (title, price) => {
	return {
		type: actionTypes.BOOK_NOW,
		title: title,
		price: price,
	};
};

export const remove = () => {
	return {
		type: actionTypes.REMOVE,
	};
};

export const nextStep = () => {
	return {
		type: actionTypes.NEXT_STEP,
	};
};
