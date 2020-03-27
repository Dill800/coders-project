import React, {useState} from 'react'
import {Alert, Button, Container, Col, Row, Form, InputGroup, FormControl} from 'react-bootstrap'
 
const Filters = ( props ) => {

    const [date, setDate] = useState('');
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [city3, setCity3] = useState('');



    function submit(event) {
        event.preventDefault();
        console.log('Date', date)
        console.log('City 1', city1)
        console.log('City 2', city2)
        console.log('City 3', city3)
        props.setDate(date)
        
        let cities = [];
        if(city1 != '') cities.push(city1)
        if(city2 != '') cities.push(city2)
        if(city3 != '') cities.push(city3)

        props.setCities(cities);

    }

    function onDateChange(event) {
        setDate(event.target.value);
    }

    function city1Update(event) {
        console.log(event.target.value)
        setCity1(event.target.value)
    }

    function city2Update(event) {
        setCity2(event.target.value)
    }

    function city3Update(event) {
        setCity3(event.target.value)
    }
    

    return(
        <div>
            <div>
                <Container fluid>
                    <Row>
                        <h4>Select Date</h4>
                    </Row>
                    <Row>
                        
                        <Form onSubmit={submit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Date</Form.Label>
                            <Form.Control onChange={onDateChange} required type="Date" placeholder="mm/dd/yyyy" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>City | State</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={city1Update}/>
                            <FormControl />
                            </InputGroup>
                        </Form.Row>

                        <Form.Row>
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>City | State</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={city2Update}/>
                            <FormControl />
                            </InputGroup>
                        </Form.Row>

                        <Form.Row>
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>City | State</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={city3Update}/>
                            <FormControl />
                            </InputGroup>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group className='button'>
                            <Button variant="primary" type="submit">
                                Apply Filters
                            </Button>
                            </Form.Group>
                        </Form.Row>
                        </Form>

                    </Row>
                    <Row>&nbsp;</Row>
                </Container>
            </div>
        </div>
    )
}
export default Filters;