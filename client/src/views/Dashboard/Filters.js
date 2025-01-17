import React, { useState } from 'react';
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

const Filters = (props) => {
	let cityOptions = props.cities;

	if (props.selectedCities.length == 4) {
		cityOptions = [];
	}

	function setLocations(inputValue) {
		if (inputValue === null) {
			props.setSelectedCities([]);
			return;
		}

		let selectedLocations = [];
		for (let i = 0; i < inputValue.length; i++) {
			selectedLocations.push({
				city: inputValue[i].city,
				state: inputValue[i].state,
			});
		}
		props.setSelectedCities(selectedLocations);
	}

	return (
		<div>
			<Container fluid>
				<Row>
					<h2>Filters</h2>
				</Row>
				<Row>&nbsp;</Row>
				<Row>
					<Form>
						<Form.Group>
							<Form.Label style={{fontSize: '20px'}}>Date</Form.Label>
							<Form.Control
								onChange={(event) =>
									props.setDate(event.target.value)
								}
								required
								style={{fontSize: '16px'}}
								type='Date'
								placeholder='mm/dd/yyyy'
							/>
						</Form.Group>
					</Form>
				</Row>
				<Row>
					<Form.Label style={{fontSize: '20px'}} className='cities-label'>Cities</Form.Label>
				</Row>
				<Row>
					<Select
						style={{fontSize: '16px'}}
						options={cityOptions}
						isMulti
						className='col-8'
						onChange={(inputValue) => setLocations(inputValue)}
					/>
				</Row>
				<Row>&nbsp;</Row>
				<Row>&nbsp;</Row>
			</Container>
		</div>
	);
};

export default Filters;
