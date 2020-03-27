import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; // https://reactdatepicker.com/
import Select from 'react-select'; // https://react-select.com/home

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
	let cityOptions = props.cities;

	if (props.selectedCities.length == 4) {
		cityOptions = [];
	}

	function setLocations(inputValue) {

		if(inputValue === null) {
			props.setSelectedCities([])
			return
		}

		let selectedLocations = [];
		for (let i = 0; i < inputValue.length; i++) {
			selectedLocations.push({city: inputValue[i].city, state: inputValue[i].state});
		}
		props.setSelectedCities(selectedLocations);
	}

	return (
		<div>
			<Container fluid>
				<Row>
					<h4>Select Date</h4>
				</Row>
				<Row>
					<Form>
						<Form.Group>
							<Form.Label>Date</Form.Label>
							<Form.Control
								onChange={event =>
									props.setDate(event.target.value)
								}
								required
								type='Date'
								placeholder='mm/dd/yyyy'
							/>
						</Form.Group>
					</Form>
				</Row>
				<Row>&nbsp;</Row>
				<Row>
					<h4>Select Cities</h4>
				</Row>
				<Row>
					<Select
						options={cityOptions}
						isMulti
						className='col-8'
						onChange={inputValue => setLocations(inputValue)}
					/>
				</Row>
				<Row>&nbsp;</Row>
			</Container>
		</div>
	);
};

export default Filters;
