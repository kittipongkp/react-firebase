import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) =>{
    const {auth } =props;
   // console.log(auth)
    const link = auth.uid ? <SignedInLink /> : <SignedOutLink />
    return(
        <nav className="nav-warpper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo" >MarioPlan </Link>
                {link}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
   // console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar) 