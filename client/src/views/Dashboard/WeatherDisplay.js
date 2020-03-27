import React from 'react';

import {
	Container,
	Row,
	Table,
	Col,
	Card,
	Button,
	Form,
} from 'react-bootstrap';

const WeatherDisplay = props => {
	const weatherCards = [];

	for (let i = 0; i < props.data.length; i++) {
		console.log(props.data)
		weatherCards.push(
			<Card style={{ width: '100%' }} className='weatherCard'>
				<Card.Body>
					<Card.Title>{props.data[i].city}</Card.Title>
					<Card.Text>{props.data[i].weather}</Card.Text>
				</Card.Body>
			</Card>,
		);
	}

	return <div>{weatherCards}</div>;
};

export default WeatherDisplay;
