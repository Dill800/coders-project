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

    for (let i = 0; i < props.weather.length; i++) {
        weatherCards.push(
            <Card style={{ width: '18rem' }} className='weatherCard'>
                <Card.Header>{props.weather[i].location}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.weather[i].value}</Card.Title>
                    <Card.Text>
                        Icon will go here in the future...
                    </Card.Text>
                </Card.Body>
            </Card >
        );
    }




    return (<div>{weatherCards}</div>);
};

export default WeatherDisplay;
