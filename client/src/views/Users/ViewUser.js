import React from 'react';
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
} from 'react-bootstrap';
import axios from 'axios';
import tokenManager from '../../tokenManager';

const ViewUser = (props) => {
	function updateAccess(user) {
		axios
			.post('/users/updatePrivilege', {
				email: user.email,
				newAccessLevel: user.accessLevel === 0 ? 1 : 0,
			})
			.then(() => {
				props.refreshData();
			});
	}

	function levelDescription(level) {
		if(level === 0) {
			return "Normal User";
		}
		if(level === 1) {
			return "Insurance Company"
		}
		return "Admin"
	}

	const viewUser = props.data.map((directory) => {
		if (directory.email == props.selected)
			return (
				<Card xs={12}>
					<Card.Body>
						<Card.Text>
							<p style={{ fontSize: '18px' }}>
								Email: {directory.email}
							</p>
							<p style={{ fontSize: '18px' }}>
								Access Level: {levelDescription(directory.accessLevel)}
							</p>
							<p style={{ fontSize: '18px' }}>
								State: {directory.state}
							</p>
							<p style={{ fontSize: '18px' }}>
								City: {directory.city}
							</p>
							<p style={{ fontSize: '18px' }}>
								Address: {directory.address}
							</p>
							<p style={{ fontSize: '18px' }}>
								Phone Number: {directory.phoneNumber}
							</p>
							<p style={{ fontSize: '18px' }}>
								Dashcam:{' '}
								{directory.dashcamInCar === 0 ? 'No' : 'Yes'}
							</p>
							<p style={{ fontSize: '18px' }}>
								Stars: {directory.stars}
							</p>
						</Card.Text>
						{tokenManager.getCurrentUser().accessLevel === 2 && (
							<Button
								variant='primary'
								onClick={() => {
									updateAccess(directory);
								}}
							>
								{directory.accessLevel === 0
									? 'Promote'
									: 'Demote'}
							</Button>
						)}
					</Card.Body>
				</Card>
			);
	});

	return <div>{viewUser}</div>;
};

export default ViewUser;
