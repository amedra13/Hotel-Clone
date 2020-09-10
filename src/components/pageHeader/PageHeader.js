import React from 'react';
import './pageHeader.css';

const PageHeader = (props) => {
	return (
		<div className="PageHeader">
			<h5>
				<i>{props.subtitle}</i>
			</h5>
			<h1>{props.title}</h1>
		</div>
	);
};

export default PageHeader;
