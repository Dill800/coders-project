import React, {useState, useEffect} from 'react';
import UserList from './Components/UserList';
import ViewUsers from './Components/ViewUsers';
import { Link } from 'react-router-dom';
import Search from './Components/Search';
import './List.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import Dashboard from '../Dashboard/Dashboard';
import Privilege from '../Privilege/Privilege';

const List = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        pullInData()
    }, [])

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
        <Link to='/dashboard'>
                        <button>Go Back to Dashboard</button>
                    </Link>
            <div className="row">
                <h1 class="h1">User Directory List</h1>
            </div>

            <Search update={filterUpdate}/>
            
            <main>

                <div className="row">
                    <div className="column1">
                        <div className="tableWrapper">
                            <table className="table table-striped table-hover">
                                <tr>
                                    <td>
                                        <b>Username</b>
                                    </td>
                                
                                </tr>
                                <UserList
                                    data={data}
                                    update={filterText}
                                    updateSelected={selectedUpdate}
                                />
                            </table>
                        </div>
                    </div>
                    
                    <div className="column2">
                        <ViewUsers 
                        data={data}
                        selected={selectedUser}
                        refreshData={pullInData}
                            />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default List; 