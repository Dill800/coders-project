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

const WeatherDisplay = (props) => {
	const weatherCards = [];

	for (let i = 0; i < props.data.length; i++) {
		console.log(props.data);
		weatherCards.push(
			<Col md={3}>
				<Card style={{ width: '100%' }} className='weatherCard'>
					<Card.Body>
						<Card.Title style={{fontSize: '20px'}}>{props.data[i].city}</Card.Title>
						<Card.Text style={{fontSize: '16px'}}>{props.data[i].weather}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}

	return <Row>{weatherCards}</Row>;
};

export default WeatherDisplay;
