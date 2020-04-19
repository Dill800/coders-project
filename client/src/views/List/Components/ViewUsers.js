import React from 'react';
import axios from 'axios'

// card
const ViewUsers = (props) => {
    console.log(props.selected)

    function updateAccess(user) {
        console.log('SJDFKJSDHF I RAN')
        console.log(user.email, user.accessLevel === 0 ? 1 : 0)
        axios.post('/users/updatePrivilege', {email: user.email, newAccessLevel: user.accessLevel === 0 ? 1 : 0})
        .then(() => {
            props.refreshData();
        })
    }
    
    const userList = 
    props.data.map(directory => {
        
    if (directory.email == props.selected) 
        return (
            <div>
                <h1>Email: {directory.email}</h1>
                <h3>Access Level: {directory.accessLevel}</h3>
                <button onClick={() => {updateAccess(directory)}}>{directory.accessLevel === 0 ? 'Promote' : 'Demote'}</button>
           </div>
        );


    });
    
    
    return <div>{userList}</div>
};
export default ViewUsers;