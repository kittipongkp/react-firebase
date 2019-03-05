import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';


const SignedInLink =(props)=>{
    return(
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li onClick={props.signOut} ><NavLink to="">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lightten-1">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink)