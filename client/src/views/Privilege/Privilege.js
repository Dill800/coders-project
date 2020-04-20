import React, {useState} from 'react'
import {Button, Container, Col, Row, Form,} from 'react-bootstrap'
import './Privilege.css'
import { Link } from 'react-router-dom';

const Privilege = (props) => {
    const [user, setUser] = useState('');
    
    const submit = (event) => {
        event.preventDefault();
        console.log('email: ' + user);
    }

    const onUserChange = (event) => {
        setUser(event.target.value);
    }

    return (
    <Container>
        <Row className='justify-content-center'>
        <Col xs={9} md={6}>

        <div className='landing-title-container'>
        <h1 className='landing-title'>Update A Users Privilege</h1>
        </div>

        <Form onSubmit={submit}>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={onUserChange} required type="email" placeholder="Username" />
            </Form.Group>
        </Form.Row>

        <Form.Group className='button'>
        <Button variant="primary" type="submit">
            Give Admin Access to the User
        </Button>
        </Form.Group>
        </Form>
        </Col>
        </Row>
    </Container>
    )
}
export default Privilege;