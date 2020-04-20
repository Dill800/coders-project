import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
	Form,
	Tab,
} from 'react-bootstrap';

import axios from 'axios';
import tokenManager from '../../tokenManager';
import Search from './Search';
import UserList from './UserList';
import ViewUser from './ViewUser';

const List = (props) => {
	const [filterText, setFilterText] = useState('');
	const [selectedUser, setSelectedUser] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		pullInData();
	}, []);

	// If not signed in or old token or not admin, redirect to login
	if (
		!tokenManager.getCurrentUser() ||
		tokenManager.getCurrentUser().accessLevel === 0
	) {
		return <Redirect to='/dashboard'></Redirect>;
	}

	function pullInData() {
		axios.get('/users/getUsers').then((response) => {
			setData(response.data.data);
		});
	}

	const selectedUpdate = (email) => {
		setSelectedUser(email);
	};

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h1 style={{ textAlign: 'center', paddingTop: '70px' }}>
							User Directory List
						</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<Search update={setFilterText} value={filterText} />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th style={{ fontSize: '22px' }}>Email</th>
								</tr>
							</thead>
							<UserList
								data={data}
								update={filterText}
								updateSelected={selectedUpdate}
							/>
						</Table>
					</Col>
					<Col md={6}>
						<ViewUser
							data={data}
							selected={selectedUser}
							refreshData={pullInData}
						/>
					</Col>
				</Row>
				<Row>
					<Container
						className='button'
						style={{ paddingTop: '20px' }}
					>
						<Link to='/dashboard'>
							<Button variant='primary' type='dashboard'>
								Dashboard
							</Button>
						</Link>
					</Container>
				</Row>
			</Container>
			<br/>
		</div>
	);
};

export default List;
