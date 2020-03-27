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
import DataVis from '../../components/DataVis/DataVis'
import axios from 'axios'

const tokenManager = require('../../tokenManager');

const Dashboard = props => {

	// Load in distinct values on loading of component
	const [distinctCities, setDistinctCities] = useState([{}])

	useEffect(() => {
		axios.get('/accidentData/distinct')
		.then(response => {
			console.log(response.data.data)
			let inter = [];
			response.data.data.map(value => {
				// value must be unique for each entry
				inter.push({value: value.city + ', ' + value.state, label: value.city + ', ' + value.state, city: value.city, state: value.state})
			})
			setDistinctCities(inter);
	
		})
	}, [])

	/**
	 * Begin Filter Information
	 */

	// filter info
	const [date, setDate] = useState('');
	const [selectedLocations, setSelectedLocations] = useState([]);

	// data (city json)
	const [data, setData] = useState({});

	// data is a list of JSON in format:
	/*
	{
		city:
		state:
		weather:
		accidents:
	}
	*/

	const weather = [
		{ location: 'Tampa', value: 'Sunny' },
		{ location: 'Orlando', value: 'Raining' },
		{ location: 'Atlanta', value: 'Snowing' },
		{ location: 'Austin', value: 'Cloudy' },
	];

	// If not signed in or old token, redirect to login
	if (!props.currUser || !tokenManager.isValid()) {
		return <Redirect to='/'></Redirect>;
	}

	function logOut() {
		tokenManager.removeToken();
		props.setCurrUser(null);
		props.history.push('/login');
	}

	function applyFilters() {
		console.log(date);
		console.log(selectedLocations);

		let chartData = []

		let calls = [];
		selectedLocations.forEach((val, ind) => {
			let city = val.city;
			let state = val.state;
			calls.push(axios.get('/accidentData/totalInfo/?date=' + date + '&city=' + city + '&state=' + state))
		})

		axios.all(calls)
		.then(
			axios.spread((...responses) => {
				responses.map(response => {
					console.log(response)
					console.log(response.data)
					chartData.push(response.data)
				})

				setData(chartData);
			})
		)

	}

	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Navbar.Brand href='/Dashboard'>Traffic App</Navbar.Brand>
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
					<Col md={6}>
						<h4>Accident Graph</h4>
						<DataVis data={data}/>
					</Col>
					<Col md={2}>
						<h4>Weather</h4>
						<WeatherDisplay data={data} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Dashboard;
