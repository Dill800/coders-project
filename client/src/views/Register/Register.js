import React, {useState} from 'react'
import {Button, Container, Col, Row, Form,} from 'react-bootstrap'
import './Register.css'
import { Link } from 'react-router-dom';

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const submit = (event) => {
        event.preventDefault();
        console.log('email: ' + email + ' passwor: ' + pass + ' city: ' + city + ' state: ' + state);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPassChange = (event) => {
        setPass(event.target.value);
    }
    
    const onCityChange = (event) => {
        setCity(event.target.value);
    }
    const onStateChange = (event) => {
        setState(event.target.value);
    }



    return (
        <Container>
            <Row className='justify-content-center'>
            <Col xs={9} md={6}>

            <div className='landing-title-container'>
            <h1 className='landing-title'>Create New Account</h1>
            
            </div>

            <Form onSubmit={submit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={onEmailChange} required type="email" placeholder="123@abc.com" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={onPassChange} required type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={onCityChange} required type="city" placeholder="Atlanta" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" onChange={onStateChange}>
        <option>Choose...</option>
        <option>Florida</option>
      </Form.Control>
    </Form.Group>

    
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I agree with the terms and conditions" />
    <Link>Terms and Conditions</Link>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<div className='forgot-password-container'>
                <Link>Already Have an Account?</Link>
            </div>
            </Col>
            </Row>

        </Container>
    )

}

export default Register;