import React, {useState} from 'react'
import {Button, Container, Col, Row, Alert, Form, Grid, Jumbotron, Modal} from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const tokenManager = require('../../tokenManager')

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errShow, setErrShow] = useState(false);
    const [errMsg, setErrMsg] = useState('')

    function close() {
        setErrShow(false);
    }

    // Logging in
    const submit = (event) => {
        event.preventDefault();
        
        axios.post('/users/login', {
            username: email,
            pw: pass
        }).then(response => {
            console.log(response.data)
            if(response.data.success === 1) {

                // Successful Login
                const token = response.data.token;
                axios.defaults.headers.common.token = token;
                tokenManager.setToken(token);

                console.log(tokenManager.getCurrentUser())

                props.setCurrUser(tokenManager.getCurrentUser())

                props.history.push('/dashboard')

            }
            else {
                setErrMsg(response.data.message);
                setErrShow(true)
            }
        })

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
            <div className='create-account-container'>
                <Link to='/register'>Register</Link>
            </div>

            <Modal show={errShow} onHide={close}>
                <Modal.Body>
                    {errMsg}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                </Modal.Footer>
            </Modal>
            

        </Container>
    )

}

export default Login;
