import React, {useState, useEffect} from 'react';
import UserList from './Components/UserList';
import ViewUsers from './Components/ViewUsers';
import Search from './Components/Search';
import data from './data/data';
import './List.css'

import 'bootstrap/dist/css/bootstrap.min.css';


const List = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedUser, setSelectedUser] = useState('');

    const filterUpdate = (value) => {
        setFilterText(value);
    };

    const selectedUpdate = (id) => {
        setSelectedUser(id);
        console.log(selectedUser)
    };


    return (
        <div className="bg">
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
                            />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default List; 