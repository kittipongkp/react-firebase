import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) =>{
    const {auth, profile } =props;
  // console.log(profile)
    const link = auth.uid ? <SignedInLink profile={profile} /> : <SignedOutLink />
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
   //console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar) 