import React, { useState, useEffect } from 'react';
import BarGraph from '../../components/BarGraph/BarGraph'
import {Spinner} from 'react-bootstrap'
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

const tokenManager = require('../../tokenManager')

const Dashboard = props => {

	const [data, setData] = useState([{
		city: 'home city',
		weather: 'fair',
		accidents: 34
	}])

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('effecrt used')
	})

	function addData() {
		setData([...data, 
		{
			city: 'andre sauce',
			weather: 'good',
			accidents: 88
		}])
		setLoading(false) 
	}

	function revertData() {
		setData([{
			city: 'home city',
			weather: 'fair',
			accidents: 34
		}])
	}

	// If not signed in or old token, redirect to login
    if(!props.currUser || !tokenManager.isValid()) {
        return(
            <Redirect to='/'></Redirect>
        )
	}

	console.log('dashboard interacted with')
	
	function logOut() {
		tokenManager.removeToken();
		props.setCurrUser(null);
		props.history.push('/login')
	}

	return (
		<div>
		{loading ? <Spinner animation="grow" variant="primary"></Spinner> : <BarGraph data={data}/>}
		<button onClick={addData}>Add</button>
		<button onClick={revertData}>Revert</button>
		</div>
		/*
		<div>
			<Container fluid>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='/Dashboard'>Welcome, {props.currUser.email}</Navbar.Brand>
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
					<Col md={2}>
						<h4>Select Date</h4>
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
				<Row>
					<Col>
						<h3>Cities</h3>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img
								variant='top'
								src='https://via.placeholder.com/180x100.png?text=Tampa'
							/>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img
								variant='top'
								src='https://via.placeholder.com/180x100.png?text=Atlanta'
							/>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img
								variant='top'
								src='https://via.placeholder.com/180x100.png?text=Austin'
							/>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img
								variant='top'
								src='https://via.placeholder.com/180x100.png?text=Chicago'
							/>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img
								variant='top'
								src='https://via.placeholder.com/180x100.png?text=Detroit'
							/>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>&nbsp;</Col>
				</Row>
			</Container>
		</div>
		*/
	);
};

export default Dashboard;