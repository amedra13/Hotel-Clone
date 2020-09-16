import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import GroupIcon from '@material-ui/icons/Group';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './occupancy.css';

const Occupancy = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<div className="Date__GuestInfo" onClick={handleClick}>
				<GroupIcon />
				<div className="Date__numberOfPeople">
					<p>Guests</p>
					<p>
						{props.adults} Adult, {props.children} Children
					</p>
				</div>
			</div>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem>
					<div className="Date__MenuItem">
						<p>Adults</p>
						<button onClick={props.onAddAdult}>+</button>
						<p>{props.adults}</p>
						<button onClick={props.onSubAdult}>-</button>
					</div>
				</MenuItem>
				<MenuItem>
					<div className="Date__MenuItem">
						<p>Children</p>
						<button onClick={props.onAddChild}>+</button>
						<p>{props.children}</p>
						<button onClick={props.onSubChild}>-</button>
					</div>
				</MenuItem>
			</Menu>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		adults: state.date.adults,
		children: state.date.children,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddAdult: () => dispatch(actions.addAdult()),
		onSubAdult: () => dispatch(actions.subAdult()),
		onAddChild: () => dispatch(actions.addChild()),
		onSubChild: () => dispatch(actions.subChild()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Occupancy);
