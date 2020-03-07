import React, {useState} from 'react'
import {Button, Container, Col, Row, Form,} from 'react-bootstrap'
import './Forgot.css'
import { Link } from 'react-router-dom';

const Forgot = (props) => {
    const [email, setEmail] = useState('');
    
    const submit = (event) => {
        event.preventDefault();
        console.log('email: ' + email);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return (
    <Container>
        <Row className='justify-content-center'>
        <Col xs={9} md={6}>

        <div className='landing-title-container'>
        <h1 className='landing-title'>Forgot Password?</h1>
        </div>

        <Form onSubmit={submit}>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={onEmailChange} required type="email" placeholder="Email" />
            </Form.Group>
        </Form.Row>

        <Form.Group className='button'>
        <Button variant="primary" type="submit">
            Send my password
        </Button>
        </Form.Group>
        </Form>
        </Col>
        </Row>
    </Container>
    )
}
export default Forgot;