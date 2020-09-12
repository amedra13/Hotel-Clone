import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	slideButtons: {
		height: '3rem',
		margin: '10px 0',
	},
	listItem: {
		padding: '0',
		marginLeft: '25px',
	},
	imgContainerStyle: {
		overflow: 'hidden',
		borderRadius: '3px',
		height: '350px',
		width: '100%',
	},
	imgStyle: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		objectPosition: '50% 50%',
	},
});

const IndividualSlide = (props) => {
	const classes = useStyles();

	let slide = (
		<>
			<Grid item xs={12} md={props.slideWidth ? props.slideWidth : 8}>
				<Slide
					direction="right"
					timeout={{ enter: '1000ms' }}
					in
					mountOnEnter
					unmountOnExit
				>
					<div className={classes.imgContainerStyle}>
						<img
							className={classes.imgStyle}
							src={props.info.source}
							alt={props.info.title}
						/>
					</div>
				</Slide>
			</Grid>
			<Grid container item xs={12} md={props.slideWidth ? props.slideWidth : 4}>
				<h1>{props.info.title}</h1>
				<p>{props.info.description}</p>
				<List>
					{props.info.highlights &&
						props.info.highlights.map((highlight) => {
							return (
								<ListItem className={classes.listItem}>{highlight}</ListItem>
							);
						})}
				</List>
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
					<List>
						{props.info.highlights &&
							props.info.highlights.map((highlight) => {
								return (
									<ListItem className={classes.listItem}>{highlight}</ListItem>
								);
							})}
					</List>
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
					<Slide
						direction="left"
						in
						timeout={{ enter: '1000ms' }}
						mountOnEnter
						unmountOnExit
					>
						<div className={classes.imgContainerStyle}>
							<img
								className={classes.imgStyle}
								src={props.info.source}
								alt={props.info.title}
							/>
						</div>
					</Slide>
				</Grid>
			</>
		);
	}
	return slide;
};

export default IndividualSlide;
