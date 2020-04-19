import React from 'react';
import axios from 'axios'
import tokenManager from '../../../tokenManager'
import { Card } from 'react-bootstrap';

// card
const ViewUsers = (props) => {

    function updateAccess(user) {
        axios.post('/users/updatePrivilege', {email: user.email, newAccessLevel: user.accessLevel === 0 ? 1 : 0})
        .then(() => {
            props.refreshData();
        })
    }
    
    const userList = 
    props.data.map(directory => {
        
    if (directory.email == props.selected) 
        return (
            <div style={{justifyContent:'center', alignItems:'center'}}>
                <h4>Email: {directory.email}</h4>
                <h5>Access Level: {directory.accessLevel}</h5>
                <h5>State: {directory.state}</h5>
                <h5>City: {directory.city}</h5>
                <h5>Address: {directory.address}</h5>
                <h5>Phone Number: {directory.phoneNumber}</h5>
                {/*<h5>Dashcam: {directory.dashcamInCar === 0 ? 'No' : 'Yes'}</h5>*/}
                <h5>Stars: {directory.stars}</h5>
                
            
                
                {tokenManager.getCurrentUser().accessLevel === 2 && <button onClick={() => {updateAccess(directory)}}>{directory.accessLevel === 0 ? 'Promote' : 'Demote'}</button>}
           </div>
        );


    });
    
    
    return <div>{userList}</div>
};
export default ViewUsers;