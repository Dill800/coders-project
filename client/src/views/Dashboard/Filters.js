import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CheckBox from './CheckBox';

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
					<CheckBox
						selectedCities={props.selectedCities}
						setSelectedCities={props.setSelectedCities}
						cities={props.cities}
					/>
				</Row>
			</Container>
		</div>
	);
};

export default Filters;
