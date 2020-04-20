import React, {useState} from 'react'
import {Alert, Button, Container, Col, Row, Form,} from 'react-bootstrap'
import './Register.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [isAdmin, setAdmin] = useState(false);
    const [dashcam, setDashcam] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        axios.post('/users', {

          email: email,
          passwordHash: pass,
          phoneNumber : phoneNumber,
          address: address,
          city: city,
          state: state,
          accessLevel: 0,
          dashcamInCar : dashcam ? 1 : 0,
          stars: 0

        }).then(response => {
          if(response.data.success === 0) {
            window.alert(response.data.message);
          }
          else {
            console.log(response.data)
            props.history.push('/')
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
    const onPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }
    const onAddressChange = (event) => {
      setAddress(event.target.value);
     }
    const onCityChange = (event) => {
        setCity(event.target.value);
    }
    const onStateChange = (event) => {
        setState(event.target.value);
    }
    const onDashCamChecked = event => {
      setDashcam(event.target.checked)
  }

    return (
        <Container>
            <Row className='justify-content-center'>
            <Col xs={9} md={6}>

            <div className='landing-title-container'>
            <h1 className='landing-title'>Create New Account</h1>
            
            </div>

            <Form onSubmit={submit}>

{/* Forms Boxes */}
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
    <Form.Group as={Col} controlId="formGridPhoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control onChange={onPhoneNumberChange} required type="phoneNumber" placeholder="Phone Number" />
    </Form.Group>
</Form.Row>
<Form.Row>
    <Form.Group as={Col} controlId="formGridAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control onChange={onAddressChange} required type="address" placeholder="Address" />
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
      <Form.Control style={{fontSize: "20px"}} required as="select" onChange={onStateChange}>
        <option>Choose...</option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Arkansas</option>
        <option>California</option>
        <option>Colorado</option>
        <option>Connecticut</option>
        <option>Delaware</option>
        <option>Florida</option>
        <option>Georgia</option>
        <option>Hawaii</option>
        <option>Idaho</option>
        <option>Illinois</option>
        <option>Indiana</option>
        <option>Iowa</option>
        <option>Kansas</option>
        <option>Kentucky</option>
        <option>Louisiana</option>
        <option>Maine</option>
        <option>Maryland</option>
        <option>Massachusetts</option>
        <option>Michigan</option>
        <option>Minnesota</option>
        <option>Mississippi</option>
        <option>Missouri</option>
        <option>Montana</option>
        <option>Nebraska</option>
        <option>Nevada</option>
        <option>New Hampshire</option>
        <option>New Jersey</option>
        <option>New Mexico</option>
        <option>New York</option>
        <option>North Carolina</option>
        <option>North Dakota</option>
        <option>Ohio</option>
        <option>Oklahoma</option>
        <option>Oregon</option>
        <option>Pennsylvania</option>
        <option>Rhode Island</option>
        <option>South Carolina</option>
        <option>South Dakota</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Utah</option>
        <option>Vermont</option>
        <option>Virginia</option>
        <option>Washington</option>
        <option>West Virginia</option>
        <option>Wisconsin</option>
        <option>Wyoming</option>
      </Form.Control>
    </Form.Group> 
</Form.Row>

{/* Checkboxes */}


  <div>
  <Form.Group className="inline" id="formGridCheckbox">
    <Form.Check style={{fontSize: "20px"}} onChange={onDashCamChecked} type="checkbox" label="I have a dashcam in my car"/>
  </Form.Group>
  </div>


  {/* Submit Button */}
  <Form.Group className='button'>
  <Button variant="primary" type="submit">
    Register
  </Button>
  </Form.Group>
</Form>
<div className='already-have-an-account-container' style={{marginBottom: "20px", fontSize: "20px"}}>
    <Link to='/'>Already Have an Account?</Link>
</div>

    </Col>
    </Row>
    </Container>
    )

}

export default Register;