import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
       // const valiError = this.validator(this.state);
       // this.setState({ valiError: valiError });
        
        this.props.signUp(this.state)
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // validator = (state) =>{
    //     const valiError={}
    //     if(state.email === ""){
    //         valiError.email = "กรุณากอกค่าอีเมลล์"
    //        // console.log('กรุณากอกค่าอีเมลล์')
    //     }
        
    //     return valiError
    // }

    render() {

       // const {valiError} = this.state
       // console.log(valiError.email)
        const { auth, authError } = this.props
        // console.log(auth.uid)
        if (auth.uid) { return <Redirect to='/' /> }
        return (
            <div className="white container">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Fisrt Name</label>
                        <input type="text" id="firstName" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        {authError ? <p>{authError}</p>: null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signUp: (newUser)=> dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
