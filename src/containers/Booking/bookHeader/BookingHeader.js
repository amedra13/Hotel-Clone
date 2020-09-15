import React from 'react';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PhoneIcon from '@material-ui/icons/Phone';
import './bookingheader.css';

const BookingHeader = () => {
	return (
		<div>
			<div className="Date__ImgHeader">
				<div className="Date__ContactContainer">
					<h2>NOBU HOTEL PALO ALTO</h2>
					<div className="Date__ContactInfo">
						<EmojiTransportationIcon />
						<p>
							180 Hamilton Avenue, Palo Alto, California, United States, 94301
						</p>
					</div>
					<div className="Date__ContactInfo">
						<PhoneIcon />
						<p>1-650-6663311</p>
					</div>
				</div>
			</div>
			<div className="Date_Announcement">
				The Hotel will be re opening on July 1st 2020.
			</div>
		</div>
	);
};

export default BookingHeader;
