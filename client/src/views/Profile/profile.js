import React, {useEffect, useState} from 'react'
import {Container, Col, Row,} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from axios

const name = ( props ) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <p>yagga</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default name;