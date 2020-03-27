import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
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
		let selectedLocations = [];
		for (let i = 0; i < inputValue.length; i++) {
			selectedLocations.push(inputValue[i].value);
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
					<Select
						options={cityOptions}
						isMulti
						className='col-8'
						onChange={(inputValue) => setLocations(inputValue)}
					/>
				</Row>
				<Row>&nbsp;</Row>
			</Container>
		</div>
	);
};

export default Filters;
