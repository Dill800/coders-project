import React from 'react';
import '../List.css'

const Search = (props) => {

    const filterUpdate = () => {
        
    };

    return (
        <form className = "searchBar">
            <input type="text" placeholder="Type to Filter Users"
            value={props.input} onChange={(e) => {props.update(e.target.value)}}/>
        </form>
    );

};

export default Search;