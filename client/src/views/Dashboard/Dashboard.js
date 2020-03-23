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
		'Tampa',
		'Orlando',
		'Atlanta',
		'Austin',
		'Las Vegas',
		'New York',
		'Gainesville',
	];

	const [startDate, setStartDate] = useState(new Date());
	const [selectedCities, setSelectedCities] = useState(['Tampa']);

	/**
	 * End Filter Information
	 */

	// If not signed in or old token, redirect to login
	if (!props.currUser || !tokenManager.isValid()) {
		return <Redirect to='/'></Redirect>;
	}

	function logOut() {
		tokenManager.removeToken();
		props.setCurrUser(null);
		props.history.push('/login');
	}

	return (
		<div>
			<Container fluid>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='/Dashboard'>
						Welcome, {props.currUser.email}
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
			</Container>
			<Container fluid>
				<Row>
					<Col>
						<h2>#CITY Overview</h2>
					</Col>
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
					</Col>
					<Col md={8}>
						<h4>Accident Information</h4>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Time</th>
									<th>Address</th>
									<th>Report Details</th>
									<th>Number of Drivers Involved</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md={2}>
						<h4>Hourly Weather</h4>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Hour</th>
									<th>Weather</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Dashboard;
