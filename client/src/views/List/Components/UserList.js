import React, {useState, useEffect} from 'react'


const UserList = (props) => {



const userList = 
props.data.map(directory => {
    if (directory.email.toLowerCase().indexOf(props.update.toLowerCase()) != -1)
    return (
        <tr key ={directory.id}>
        <td onClick={(e) => {props.updateSelected(directory.id)}}> {directory.email}</td>
        </tr>
    );
});

return <div>{userList}</div>;

};

export default UserList;