import React, {useState} from 'react'
import {Button, Container, Col, Row, Alert, Form, Grid, Jumbotron} from 'react-bootstrap'
import './Landing.css'
import { Link } from 'react-router-dom';

const Landing = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit = (event) => {
        event.preventDefault();
        console.log('email: ' + email + " pass: " + pass);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPassChange = (event) => {
        setPass(event.target.value);
    }

    return (
        <Container>
            <Row className='justify-content-center'>
            <Col xs={9} md={6}>

            <div className='landing-title-container'>
            <h1 className='landing-title'>Sign In</h1>
            
            </div>

            <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={onEmailChange} required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={onPassChange} required type="password" placeholder="Password" />
            </Form.Group>
            
            <Button block variant="outline-primary" type="submit">
                Login
            </Button>
            </Form>
            </Col>
            </Row>

            <div className='forgot-password-container'>
                <Link to='/forgot-password'>Forgot Password?</Link>
            </div>

        </Container>
    )

}

export default Landing;