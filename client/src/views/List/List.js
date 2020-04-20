import React, {useState, useEffect} from 'react';
import UserList from './Components/UserList';
import ViewUsers from './Components/ViewUsers';
import { Link, Redirect } from 'react-router-dom';
import Search from './Components/Search';
import './List.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Row,
	Table,
	Col,
	Card,
	Button,
} from 'react-bootstrap';

import axios from 'axios'
import tokenManager from '../../tokenManager'

const List = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        pullInData()
    }, [])

    // If not signed in or old token or not admin, redirect to login
	if (
		!tokenManager.getCurrentUser() ||
		tokenManager.getCurrentUser().accessLevel === 0
	) {
		return <Redirect to='/dashboard'></Redirect>;
	}

    function pullInData() {
        axios.get('/users/getUsers')
        .then(response => {
            setData(response.data.data)
        })
    }

    const filterUpdate = (value) => {
        setFilterText(value);
    };

    const selectedUpdate = (email) => {
        setSelectedUser(email);
    };


    return (
        <div className="bg">

                <h1 class="user-title">User Directory List</h1>


            <Search update={filterUpdate}/>
            
            <Container fluid>

                <Row>
                    <Col xs={6}>
                        <h2 className='table-title'>Username</h2>
                            <div className="tableWrapper">
                            <table className="table">
                                
                                <UserList
                                    
                                    data={data}
                                    update={filterText}
                                    updateSelected={selectedUpdate}
                                />

                            </table>
                        </div>
                    </Col>
                    <Col xs={6}>
                    <ViewUsers 
                        data={data}
                        selected={selectedUser}
                        refreshData={pullInData}
                            />
                    </Col>
                </Row>

            </Container>
            <Link to='/dashboard'>
                        <button className='btn'>Dashboard</button>
            </Link>
            
        </div>
    );
};

export default List; 