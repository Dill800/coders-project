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
import axios from 'axios'
import Filters from '../../components/Header/Filters/Filters'
import DataVis from '../../components/DataVis/DataVis'

const tokenManager = require('../../tokenManager')

const Dashboard = props => {

	const [cities, setCities] = useState({})
	const [date, setDate] = useState('')
	const [data, setData] = useState([])

	// If not signed in or old token, redirect to login
    if(!props.currUser || !tokenManager.isValid()) {
        return(
            <Redirect to='/'></Redirect>
        )
	}
	
	function logOut() {
		tokenManager.removeToken();
		props.setCurrUser(null);
		props.history.push('/login')
	}

	//let cities = ['Royal Palm Beach', 'Gainesville', 'Jupiter']
	//let date = '2020-02-02'

	

	function buttonClicked() {

		let chartData = [];

		let calls = [];
		cities.forEach((val, ind) => {
			calls.push(axios.get('/accidentData/totalInfo/?date=' + date + '&city=' + val + '&state=Florida'))
		})

		axios.all(calls)
		.then(
			axios.spread((...responses) => {
				responses.map(response => {
					chartData.push(response.data)
				})

				setData(chartData)
			})
		)

	}

	return (
		<div>
			<Container fluid>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='/Dashboard'>Welcome, {props.currUser.email}</Navbar.Brand>
					<button onClick={buttonClicked}>Test</button>
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
								<NavDropdown.Item onClick = {logOut} href='#'>
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
					<Col md={3}>
						<h4>Select Date</h4>
						<Row>
							<Filters setCities={setCities} setDate={setDate}/>
						</Row>
					</Col>
					<Col md={9}>
						<h4>Accident Information</h4>
						<DataVis data={data}/>
					</Col>
				</Row>
				
				
			</Container>
		</div>
	);
};

export default Dashboard;