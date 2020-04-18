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
import WeatherDisplay from './WeatherDisplay';
import DataVis from '../../components/DataVis/DataVis';
import axios from 'axios';

const tokenManager = require('../../tokenManager');

//TODO: make weather have icons

const Dashboard = (props) => {
	// Load in distinct values on loading of component
	const [distinctCities, setDistinctCities] = useState([{}]);

	useEffect(() => {
		axios.get('/accidentData/distinct').then((response) => {
			console.log(response.data.data);
			let inter = [];
			response.data.data.map((value) => {
				// value must be unique for each entry
				inter.push({
					value: value.city + ', ' + value.state,
					label: value.city + ', ' + value.state,
					city: value.city,
					state: value.state,
				});
			});
			setDistinctCities(inter);
		});
	}, []);

	// filter info
	const [date, setDate] = useState('');
	const [selectedLocations, setSelectedLocations] = useState([]);

	// data (city json)
	const [data, setData] = useState([]);

	// If not signed in or old token, redirect to login
	if (!props.currUser || !tokenManager.isValid()) {
		return <Redirect to='/'></Redirect>;
	}

	function logOut() {
		tokenManager.removeToken();
		props.setCurrUser(null);
		props.history.push('/login');
	}

	function admin() {
		props.history.push('/admin');
	}

	function quiz() {
		props.history.push('/quiz');
	}

	function applyFilters() {
		console.log(date);
		console.log(selectedLocations);

		let chartData = [];

		let calls = [];
		selectedLocations.forEach((val, ind) => {
			let city = val.city;
			let state = val.state;
			calls.push(
				axios.get(
					'/accidentData/totalInfo/?date=' +
						date +
						'&city=' +
						city +
						'&state=' +
						state
				)
			);
		});

		axios.all(calls).then(
			axios.spread((...responses) => {
				responses.map((response) => {
					console.log(response);
					console.log(response.data);
					chartData.push(response.data);
				});

				setData(chartData);
			})
		);
	}

	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
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
								<NavDropdown.Item href='#' onClick={quiz}>
									Quizzes
								</NavDropdown.Item>
								{props.currUser.accessLevel === 1 && (
									<NavDropdown.Item onClick={admin} href='#'>
										Add Accidents
									</NavDropdown.Item>
								)}
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={logOut} href='#'>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container>
				<Row>&nbsp;</Row>
				<Row>
					<Col>
						<h2>Dashboard</h2>
					</Col>
				</Row>
				<Row>&nbsp;</Row>
				<Row>
					<Col md={4}>
						<Filters
							date={date}
							setDate={setDate}
							cities={distinctCities}
							selectedCities={selectedLocations}
							setSelectedCities={setSelectedLocations}
						/>
						<Button variant='primary' onClick={applyFilters}>
							Set Filters
						</Button>
					</Col>
					<Col md={8}>
						<h3 className='accidents'>Accident Graph</h3>
						<DataVis data={data} />
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<h3>Weather</h3>
					</Col>
				</Row>
				<WeatherDisplay data={data} />
			</Container>
		</div>
	);
};

export default Dashboard;
