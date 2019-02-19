import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLink =()=>{
    return(
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lightten-1">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLink