import * as actionTypes from './actions';

export const addFirstName = (name) => {
	return {
		type: actionTypes.ADD_FIRSTNAME,
		firstName: name,
	};
};
export const addLastName = (name) => {
	return {
		type: actionTypes.ADD_LASTNAME,
		lastName: name,
	};
};
export const addEmail = (email) => {
	return {
		type: actionTypes.ADD_EMAIL,
		email: email,
	};
};
export const addPhoneNumber = (phoneNumber) => {
	return {
		type: actionTypes.ADD_PHONENUMBER,
		phoneNumber: phoneNumber,
	};
};
export const addDetails = (details) => {
	return {
		type: actionTypes.ADD_DETAILS,
		additionalDetails: details,
	};
};
