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

const Search = (props) => {
	const updateFilterText = (value) => {
		props.update(value);
	};

	return (
		<Form>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Search</Form.Label>
					<Form.Control
						type='text'
						placeholder='Type to Filter Users'
						value={props.value}
						onChange={(e) => updateFilterText(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>
		</Form>
	);
};

export default Search;
