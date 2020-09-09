import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	slideButtons: {
		height: '3rem',
	},
});

const IndividualSlide = (props) => {
	const classes = useStyles();

	let slide = (
		<>
			<Grid item xs={12} md={props.slideWidth ? props.slideWidth : 8}>
				<div className={props.imgContainerStyle}>
					<img
						className={props.imgStyle}
						src={props.info.source}
						alt={props.info.title}
					/>
				</div>
			</Grid>
			<Grid container item xs={12} md={props.slideWidth ? props.slideWidth : 4}>
				<h1>{props.info.title}</h1>
				<p>{props.info.description}</p>
				{props.info.links.map((link) => {
					return (
						<Button
							key={link}
							className={classes.slideButtons}
							variant="outlined"
							fullWidth
						>
							<h3>{link}</h3>
						</Button>
					);
				})}
			</Grid>
		</>
	);
	if (props.reverse) {
		slide = (
			<>
				<Grid
					container
					item
					xs={12}
					md={props.slideWidth ? props.slideWidth : 4}
				>
					<h1>{props.info.title}</h1>
					<p>{props.info.description}</p>
					{props.info.links.map((link) => {
						return (
							<Button
								key={link}
								className={classes.slideButtons}
								variant="outlined"
								fullWidth
							>
								<h3>{link}</h3>
							</Button>
						);
					})}
				</Grid>
				<Grid item xs={12} md={props.slideWidth ? props.slideWidth : 8}>
					<div className={props.imgContainerStyle}>
						<img
							className={props.imgStyle}
							src={props.info.source}
							alt={props.info.title}
						/>
					</div>
				</Grid>
			</>
		);
	}
	return slide;
};

export default IndividualSlide;
