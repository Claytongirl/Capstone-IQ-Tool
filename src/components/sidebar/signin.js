import React, { Component } from 'react';
import SignInForm from './signinform';

class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <a href="#">
                    <SignInForm/>
                </a>
                
            </div>
        )
    }
}


export default SignIn;