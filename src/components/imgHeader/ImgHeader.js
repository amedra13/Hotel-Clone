import React from 'react';
import './imgHeader.css';

const ImgHeader = (props) => {
	return (
		<div className="imgHeader">
			<img src={props.imgSource} alt={props.description} />
		</div>
	);
};

export default ImgHeader;
