import React, {useState} from 'react'
import {Alert, Button, Container, Col, Row, Form,} from 'react-bootstrap'
import './Admin.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = (props) => {

    const [state, setState] = useState('');
    const [date, setDate] = useState('');
    const [city, setCity] = useState('');
    const [accidents, setAccidents] = useState('');

    const submit = (event) => {
      event.preventDefault();
      console.log('State', state)
      console.log('Date', date)
      console.log('City', city)
      console.log('Accidents', accidents)

      axios.post('/accidentData',
      {
          state: state,
          date: date,
          city: city,
          accidents: accidents
        }
      )
      .then((response) => {
        console.log(response.message)
      })

    }

    const onStateChange = (event) => {
        setState(event.target.value);
    } 
    const onCityChange = (event) => {
        setCity(event.target.value);
    }
    const onDateChange = (event) => {
        setDate(event.target.value);
    }
    const onAccidentsChange = (event) => {
        setAccidents(event.target.value);
    }

    return (
        <Container>
            <Row className='justify-content-center'>
            <Col xs={9} md={6}>

            <div className='landing-title-container'>
            <h1 className='landing-title'>Accident Information</h1>
            
            </div>

            <Form onSubmit={submit}>
<Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>State</Form.Label>
      <Form.Control onChange={onStateChange} required type="state" placeholder="State" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={onCityChange} required type="city" placeholder="City" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Date</Form.Label>
      <Form.Control onChange={onDateChange} required type="Date" placeholder="mm/dd/yyyy" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Number of Accidents</Form.Label>
      <Form.Control onChange={onAccidentsChange} required type="number" placeholder="Number of Accidents" />
    </Form.Group>
</Form.Row>




  <Form.Group className='button'>
  <Button variant="primary" type="submit">
    Add Information
  </Button>
  </Form.Group>
</Form>
            </Col>
            </Row>

        </Container>
    )

}

export default Admin;