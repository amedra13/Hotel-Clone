import * as actionTypes from './actions';

export const bookNow = (title, price) => {
	return {
		type: actionTypes.BOOK_NOW,
		title: title,
		price: price,
	};
};
