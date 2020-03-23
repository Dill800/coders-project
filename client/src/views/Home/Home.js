import React, {useEffect} from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Redirect } from 'react-router-dom';

const tokenManager = require('../../tokenManager')

function Home(props) {

    // If not signed in, redirect to login
    if(!props.currUser) {
        return(
            <Redirect to='/'></Redirect>
        )
    }

    function logOut() {
        tokenManager.removeToken();
        props.setCurrUser(null);
        props.history.push('/')
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {props.currUser.email}
                </p>
                <button onClick = {logOut}>Log Out</button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;
