import React from 'react';
import axios from 'axios'
import tokenManager from '../../../tokenManager'
import { Card } from 'react-bootstrap';
import '../List.css'

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
                <h1>Email: {directory.email}</h1>
                <h1>Access Level: {directory.accessLevel}</h1>
                <h1>State: {directory.state}</h1>
                <h1>City: {directory.city}</h1>
                <h1>Address: {directory.address}</h1>
                <h1>Phone Number: {directory.phoneNumber}</h1>
                {/*<h5>Dashcam: {directory.dashcamInCar === 0 ? 'No' : 'Yes'}</h5>*/}
                <h1>Stars: {directory.stars}</h1>
                
            
                
                {tokenManager.getCurrentUser().accessLevel === 2 && <button className='btn' onClick={() => {updateAccess(directory)}}>{directory.accessLevel === 0 ? 'Promote' : 'Demote'}</button>}
           </div>
        );


    });
    
    
    return <div>{userList}</div>
};
export default ViewUsers;