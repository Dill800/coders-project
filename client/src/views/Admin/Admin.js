import React, { useState } from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Row,
	Col,
	Button,
	Form,
} from 'react-bootstrap';
import './Admin.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
const tokenManager = require('../../tokenManager');

const Admin = (props) => {
	const [state, setState] = useState('');
	const [date, setDate] = useState('');
	const [city, setCity] = useState('');
	const [street1, setStreet1] = useState('');
	const [street2, setStreet2] = useState('');
	const [accidents, setAccidents] = useState(0);

	// If not signed in or old token or not admin, redirect to login
	if (
		!tokenManager.getCurrentUser() ||
		tokenManager.getCurrentUser().accessLevel === 0
	) {
		return <Redirect to='/dashboard'></Redirect>;
	}

	const submit = (event) => {
		console.log('State', state);
		console.log('Date', date);
		console.log('City', city);
		console.log('Street 1', street1);
		console.log('Street 2', street2);
		console.log('Accidents', accidents);

		if (state == ''){
			event.preventDefault();
			alert("Please select a state");
			return;
		}
		if (accidents <= 0){
			event.preventDefault();
			alert("Number of accidents must be greater than 0");
			return;
		}
		axios
			.post('/accidentData', {
				state: state,
				date: date,
				city: city,
				street1: street1,
				street2: street2,
				accidents: accidents,
			})
			.then((response) => {
				console.log(response.message);
			});
	};

	const onStateChange = (event) => {
		setState(event.target.value);
	};
	const onCityChange = (event) => {
		setCity(event.target.value);
	};
	const onDateChange = (event) => {
		setDate(event.target.value);
	};
	const onAccidentsChange = (event) => {
		setAccidents(event.target.value);
	};
	const onStreet1Change = (event) => {
		setStreet1(event.target.value);
	};
	const onStreet2Change = (event) => {
		setStreet2(event.target.value);
	};

	return (
		<Container>
			<Row className='justify-content-center'>
				<Col xs={9} md={6}>
					<div>
						<h1
							className='landing-title'
							style={{ textAlign: 'center', paddingTop: '70px' }}
						>
							Accident Information
						</h1>
					</div>

					<Form onSubmit={submit}>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridEmail'>
								<Form.Label>State</Form.Label>
								<Form.Control 
									required 
									as="select" 
									onChange={onStateChange} 
									type='state' 
									placeholder='State'>
									<option>Choose...</option>
									<option>Alabama</option>
									<option>Alaska</option>
									<option>Arizona</option>
									<option>Arkansas</option>
									<option>California</option>
									<option>Colorado</option>
									<option>Connecticut</option>
									<option>Delaware</option>
									<option>Florida</option>
									<option>Georgia</option>
									<option>Hawaii</option>
									<option>Idaho</option>
									<option>Illinois</option>
									<option>Indiana</option>
									<option>Iowa</option>
									<option>Kansas</option>
									<option>Kentucky</option>
									<option>Louisiana</option>
									<option>Maine</option>
									<option>Maryland</option>
									<option>Massachusetts</option>
									<option>Michigan</option>
									<option>Minnesota</option>
									<option>Mississippi</option>
									<option>Missouri</option>
									<option>Montana</option>
									<option>Nebraska</option>
									<option>Nevada</option>
									<option>New Hampshire</option>
									<option>New Jersey</option>
									<option>New Mexico</option>
									<option>New York</option>
									<option>North Carolina</option>
									<option>North Dakota</option>
									<option>Ohio</option>
									<option>Oklahoma</option>
									<option>Oregon</option>
									<option>Pennsylvania</option>
									<option>Rhode Island</option>
									<option>South Carolina</option>
									<option>South Dakota</option>
									<option>Tennessee</option>
									<option>Texas</option>
									<option>Utah</option>
									<option>Vermont</option>
									<option>Virginia</option>
									<option>Washington</option>
									<option>West Virginia</option>
									<option>Wisconsin</option>
									<option>Wyoming</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridCity'>
								<Form.Label>City</Form.Label>
								<Form.Control
									onChange={onCityChange}
									required
									type='city'
									placeholder='City'
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridCity'>
								<Form.Label>Date</Form.Label>
								<Form.Control
									onChange={onDateChange}
									required
									type='Date'
									placeholder='mm/dd/yyyy'
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridCity'>
								<Form.Label>Street 1</Form.Label>
								<Form.Control
									onChange={onStreet1Change}
									required
									type='Street 1'
									placeholder='Street 1'
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridCity'>
								<Form.Label>Street 2</Form.Label>
								<Form.Control
									onChange={onStreet2Change}
									type='Street 2'
									placeholder='Street 2'
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='formGridCity'>
								<Form.Label>Number of Accidents</Form.Label>
								<Form.Control
									onChange={onAccidentsChange}
									required
									type='number'
									placeholder='Number of Accidents'
								/>
							</Form.Group>
						</Form.Row>

						<Form.Group className='button'>
							<Button variant='primary' type='submit'>
								Add Information
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<Row>
				<Container className='button'>
					<Link to='/dashboard'>
						<Button variant='primary' type='dashboard'>
							Dashboard
						</Button>
					</Link>
				</Container>
			</Row>
		</Container>
	);
};

export default Admin;
