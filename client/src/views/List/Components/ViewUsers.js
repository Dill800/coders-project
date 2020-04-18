import React from 'react';


const ViewUsers = (props) => {
    console.log(props.selected)

    const userList = 
    props.data.map(directory => {
    if (directory.id == props.selected) 
        return (
            <table>
            <tr key={directory.id}>
                <th> Email: </th>
                <td>{directory.email} </td>
                </tr>
                <tr>
                <th> Access Level: </th>
                <td>{directory.accessLevel}</td>
                </tr>
                <tr>
                <td onClick={(e) => {console.log(directory.accessLevel)}}> Promote </td>
                <td onClick={(e) => {console.log(directory.accessLevel)}}> Demote </td>
                </tr>
            </table>
        );


    });

    return <div>{userList}</div>
};
export default ViewUsers;