import React, {useState} from 'react'
import {Alert, Button, Container, Col, Row, Form,} from 'react-bootstrap'
import './Register.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    
    const submit = (event) => {
        event.preventDefault();
        axios.post('/users', {

          email: email,
          passwordHash: pass,
          city: city,
          state: state,
          accessLevel: 0

        }).then(response => {
          if(response.data.success === 0) {
            window.alert(response.data.message);
          }
        }).catch(err => {
          console.log(err);
        })
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
      <Form.Control onChange={onEmailChange} required type="email" placeholder="Email" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={onPassChange} required type="password" placeholder="Password" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={onCityChange} required type="city" placeholder="City" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control required as="select" onChange={onStateChange}>
        <option>Choose...</option>
        <option>Florida</option>
      </Form.Control>
    </Form.Group> 
  </Form.Row>

  <div >
  <Form.Group className="inline" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I agree with the"/>
<a href=" ">&nbsp;terms and conditions.</a>
  </Form.Group>
  </div>

  <Form.Group className='button'>
  <Button variant="primary" type="submit">
    Register
  </Button>
  </Form.Group>
</Form>
<div className='already-have-an-account-container'>
                <Link to='/'>Already Have an Account?</Link>
            </div>
            </Col>
            </Row>

        </Container>
    )

}

export default Register;