import * as actionTypes from './actions';

export const addAdult = () => {
	return {
		type: actionTypes.ADD_ADULT,
	};
};
export const subAdult = () => {
	return {
		type: actionTypes.SUB_ADULT,
	};
};
export const addChild = () => {
	return {
		type: actionTypes.ADD_CHILD,
	};
};
export const subChild = () => {
	return {
		type: actionTypes.SUB_CHILD,
	};
};
