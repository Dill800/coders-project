import React, {useState, useEffect} from 'react'

// table
const UserList = (props) => {


const userList = 
props.data.map(directory => {
    if (directory.email.toLowerCase().indexOf(props.update.toLowerCase()) != -1)
    return (
        <tr key ={directory.email}>
        <td onClick={(e) => {props.updateSelected(directory.email)}}> {directory.email}</td>
        </tr>
    );
});


return <div>{userList}</div>;

};

export default UserList;