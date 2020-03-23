import React, { useEffect } from 'react';

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

const CheckBox = props => {
	const citiesForm = [];

	function checkBoxClick(value) {
		console.log(value);
		let newSelectedCities = props.selectedCities;
		if (newSelectedCities.includes(value)) {
			const itemIndex = newSelectedCities.indexOf(value);
			if (itemIndex > -1) {
				newSelectedCities.splice(itemIndex, 1);
			}
		} else {
			newSelectedCities.push(value);
		}
		props.setSelectedCities(newSelectedCities);
		console.log(props.selectedCities);
	}

	function printConsole() {
		console.log('Test');
	}

	/**
	 *
	 * Component used for the date picker: https://github.com/Hacker0x01/react-datepicker/
	 *
	 */

	for (const [index, value] of props.cities.entries()) {
		let tempSelectedCities = props.selectedCities;
		if (tempSelectedCities.includes(value)) {
			citiesForm.push(
				<Form.Check
					checked
					type='checkbox'
					label={value}
					onClick={() => checkBoxClick(value)}
				/>,
			);
		} else {
			if (tempSelectedCities.length < 4) {
				citiesForm.push(
					<Form.Check
						type='checkbox'
						label={value}
						onClick={() => checkBoxClick(value)}
					/>,
				);
			} else {
				citiesForm.push(
					<Form.Check disabled type='checkbox' label={value} />,
				);
			}
		}
	}

	return <Form>{citiesForm}</Form>;
};

export default CheckBox;
