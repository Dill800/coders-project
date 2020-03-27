import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Row,
	Table,
	Col,
	Card,
	Button,
} from 'react-bootstrap';
import './Dashboard.css';
import Filters from './Filters';

const tokenManager = require('../../tokenManager');

const Dashboard = props => {
	useEffect(() => {
		console.log('effecrt used');
	});

	/**
	 * Begin Filter Information
	 */
	const cities = [
		{ value: 'tampa', label: 'Tampa, FL' },
		{ value: 'orlando', label: 'Orlando, FL' },
		{ value: 'Atlanta', label: 'Atlanta, GA' },
		{ value: 'Austin', label: 'Austin, TX' },
		{ value: 'Las Vegas', label: 'Las Vegas, NV' },
		{ value: 'New York', label: 'New York, NY' },
		{ value: 'Gainesville', label: 'Gainesville, FL' },
		{ value: 'St. Pete', label: 'St. Pete, FL' },
	];

	const [startDate, setStartDate] = useState(new Date());
	const [selectedCities, setSelectedCities] = useState([]);

	/**
	 * End Filter Information
	 */

	// If not signed in or old token, redirect to login
	// if (!props.currUser || !tokenManager.isValid()) {
	// 	return <Redirect to='/'></Redirect>;
	// }

	function logOut() {
		tokenManager.removeToken();
		props.setCurrUser(null);
		props.history.push('/login');
	}

	function applyFilters() {
		console.log(startDate);
		console.log(selectedCities);
	}

	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Navbar.Brand href='/Dashboard'>
					Traffic App
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<NavDropdown title='Menu' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#'>
								Profile
								</NavDropdown.Item>
							<NavDropdown.Item href='#'>
								Quizzes
								</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={logOut} href='#'>
								Logout
								</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container fluid>
				<Row>
					&nbsp;
				</Row>
				<Row>
					<Col>
						<h2>Dashboard</h2>
					</Col>
				</Row>
				<Row>
					&nbsp;
				</Row>
				<Row>
					<Col md={2}>
						<Filters
							startDate={startDate}
							setStartDate={setStartDate}
							cities={cities}
							selectedCities={selectedCities}
							setSelectedCities={setSelectedCities}
						/>
						<Button variant='primary' onClick={applyFilters}>
							Set Filters
						</Button>{' '}
					</Col>
					<Col md={8}>
						<h4>Accident Graph</h4>
					</Col>
					<Col md={2}>
						<h4>Weather</h4>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Dashboard;
