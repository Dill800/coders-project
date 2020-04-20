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
} from 'react-bootstrap';

const UserList = (props) => {
	const userList = props.data.map((directory) => {
		if (
			directory.email.toLowerCase().indexOf(props.update.toLowerCase()) !=
			-1
		)
			return (
				<tr key={directory.email}>
					<td
						style={{ fontSize: '18px' }}
						onClick={(e) => {
							props.updateSelected(directory.email);
						}}
					>
						{' '}
						{directory.email}
					</td>
				</tr>
			);
	});

	return <tbody>{userList}</tbody>;
};

export default UserList;
