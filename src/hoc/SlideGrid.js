import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	grid: {
		width: '98vw',
		margin: '25px auto',
		fontSize: '0.85rem',
		fontFamily: 'QuickSand',
	},
});

const SlideGrid = (props) => {
	const classes = useStyles();

	return (
		<Grid
			container
			alignItems="flex-start"
			className={classes.grid}
			spacing={4}
		>
			{props.children}
		</Grid>
	);
};

export default SlideGrid;
