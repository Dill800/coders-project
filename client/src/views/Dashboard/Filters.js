import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const Filters = props => {
	const citiesForm = [];

	/**
	 *
	 * TODO: to complete the filter component, it needs to be figured out how to set state based on an 'if checked' option.
	 * Maybe have the checkbox checked based on selectedCities prop, then if selectedCities count is == 4, set the checkboxes to disabled
	 *
	 * Useful links: https://flaviocopes.com/react-how-to-loop/ and https://medium.com/@tariqul.islam.rony/multiple-checkbox-handling-by-react-js-84b1d49a46c6
	 *
	 * Component used for the date picker: https://github.com/Hacker0x01/react-datepicker/
	 *
	 */

	for (const [index, value] of props.cities.entries()) {
		citiesForm.push(<Form.Check type='checkbox' label={value} />);
	}

	return (
		<div>
			<Container fluid>
				<Row>
					<h4>Select Date</h4>
				</Row>
				<Row>
					<DatePicker
						selected={props.startDate}
						onChange={date => props.setStartDate(date)}
					/>
				</Row>
				<Row>&nbsp;</Row>
				<Row>
					<h4>Select Cities</h4>
				</Row>
				<Row>
					<Form.Group controlId='formBasicCheckbox'>
						{citiesForm}
					</Form.Group>
				</Row>
			</Container>
		</div>
	);
};

export default Filters;
